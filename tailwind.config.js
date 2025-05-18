// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            'gt-america': ['GT America', 'Arial', 'sans-serif'],
            'times': ['Times', 'Times New Roman', 'serif'],
        },
        extend: {
            colors: {
                // Map exact hex values from Figma
                primary: {
                    'cream': '#F5EFE5',
                    'orange': '#ff7044',
                    'blue-dark': '#324d9e',
                    'blue-light': '#9eb8d8',
                    'pink-dark': '#ff8dbb',
                    'pink-light': '#f9a6c1',
                    'black': '#000000',
                    'gray-md': '#666666',
                    'gray-lt': '#999999',
                    'gray-bg': '#f5f5f5'
                },
            },
            fontSize: {
                // Map typography scale
                'heading-1': ['32px', {lineHeight: '40px', fontWeight: '700'}],
                'heading-2': ['24px', {lineHeight: '32px', fontWeight: '700'}],
                'body': ['16px', {lineHeight: '24px'}],
            },
            borderRadius: {
                // Map border radius values
                'button': '8px',
            },
            spacing: {
                // Map spacing system
                'standard': '19px',
                'medium': '35px',
                'component': '24px',
            },
            screens: {
                'sm': '640px',   // Small devices like phones (landscape)
                'md': '768px',   // Tablets
                'lg': '1024px',  // Desktops/laptops
                'xl': '1280px',  // Large desktops
                '2xl': '1536px', // Extra large screens
            },
            container: {
                screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1280px',
                },
            center: true,
            padding: {
                DEFAULT: '1rem',
                lg: '2rem',
                },
            },

        },
    },
};