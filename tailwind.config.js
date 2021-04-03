module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minWidth: {
            '30': '30%',
        },
        extend: {},
    },
    variants: {
        extend: {
            gridTemplateColumns: ['hover', 'focus'],
        },
    },
    plugins: [],
};
