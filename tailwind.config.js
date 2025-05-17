// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    	theme: {
        	extend: {
            	colors: {
	            // Map exact hex values from Figma
    	        primary: {
					'cream': '#F4F5EC',
					'orange': '#ff7044',
					'blue-dark': '#324d9e',
					'blue-light': '#9eb8d8',
					'pink-dark': '#ff8dbb',
					'pink-light': '#f9a6c1',
					'black': '#000000',
					'gray-md': '#666666',
					'gray-lt': '#999999'
				},
        	    },
        		fontSize: {
            		// Map typography scale
	        		'heading-1': ['32px', {lineHeight: '40px', fontWeight: '700'}],
	       			'body': ['16px', {lineHeight: '24px'}],
 	      		},
    	  		borderRadius: {
        	    	// Map border radius values
        			'button': '8px',
	        	},
    	    	spacing: {
        	  		// Map spacing system
        			'component': '24px',
        		},
				screens: {
					'sm': '375px',   // Mobile
					'md': '768px',   // Tablet
					'lg': '1024px',  // Desktop
					'xl': '1280px',  // Large desktop
				},
			},
    	},
};


