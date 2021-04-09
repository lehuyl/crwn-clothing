module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            minWidth: {
                '3/10': '30%',
            },
            transitionDuration: {
                '6000': '6000ms'
            },
            transitionTimingFunction: {
                'in-out-udemy': 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
            },
            width: {
                '30vw': '30vw'
            }
        },
    },
    variants: {
        extend: {
            transform: ['hover', 'focus'],
            transitionDuration: ['hover', 'focus'],
            transitionTimingFunction: ['hover', 'focus']
        },
    },
    plugins: [],
};
