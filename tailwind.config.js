// tailwind.config.js
module.exports = {
    purge: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        float: false,
        clear: false,
        objectFit: false,
        objectPosition: false,
        fontVariantNumeric: false,
        placeholderColor: false,
        placeholderOpacity: false,
        verticalAlign: false,
        divideWidth: false,
        divideColor: false,
        divideOpacity: false,
        divideStyle: false,
        ringWidth: false,
        ringColor: false,
        ringOpacity: false,
        ringOffsetWidth: false,
        ringOffsetColor: false,
        borderCollapse: false,
        tableLayout: false,
        resize: false,
        outline: false,
        appearance: false,
        userSelect: false,
    }
}
