package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"sync"
)

// EmailList stores the signup emails
type EmailList struct {
	Emails map[string]bool `json:"emails"`
	mu     sync.Mutex
	file   string
}

// NewEmailList creates a new email list
func NewEmailList(file string) *EmailList {
	list := &EmailList{
		Emails: make(map[string]bool),
		file:   file,
	}

	// Try to load existing emails
	if _, err := os.Stat(file); err == nil {
		data, err := os.ReadFile(file)
		if err == nil {
			var loaded struct {
				Emails map[string]bool `json:"emails"`
			}
			if err := json.Unmarshal(data, &loaded); err == nil {
				list.Emails = loaded.Emails
			}
		}
	}

	return list
}

// Add adds an email to the list
func (el *EmailList) Add(email string) error {
	el.mu.Lock()
	defer el.mu.Unlock()

	el.Emails[email] = true

	// Save to file
	data, err := json.MarshalIndent(struct {
		Emails map[string]bool `json:"emails"`
	}{el.Emails}, "", "  ")

	if err != nil {
		return err
	}

	return os.WriteFile(el.file, data, 0644)
}

func main() {
	port := "8080"
	if envPort := os.Getenv("PORT"); envPort != "" {
		port = envPort
	}

	emailList := NewEmailList("emails.json")

	// Newsletter signup handler
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Handle preflight request
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Only accept POST
		if r.Method != "POST" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		// Parse the request
		var req struct {
			Email string `json:"email"`
		}

		decoder := json.NewDecoder(r.Body)
		if err := decoder.Decode(&req); err != nil {
			http.Error(w, "Invalid request", http.StatusBadRequest)
			return
		}

		// Validate email (simple check)
		if req.Email == "" || len(req.Email) < 5 || !contains(req.Email, "@") {
			http.Error(w, "Invalid email address", http.StatusBadRequest)
			return
		}

		// Add email to list
		if err := emailList.Add(req.Email); err != nil {
			log.Printf("Error saving email: %v", err)
			http.Error(w, "Server error", http.StatusInternalServerError)
			return
		}

		// Return success
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{
			"message": "Thank you for subscribing!",
		})
	})

	// Health check endpoint
	http.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{
			"status": "ok",
		})
	})

	// Start server
	fmt.Printf("Server running on http://localhost:%s...\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

// Helper function to check if a string contains a substring
func contains(s, substr string) bool {
	return len(s) >= len(substr) && s[len(s)-len(substr):] == substr
}
