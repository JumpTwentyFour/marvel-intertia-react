const [IGNORE, WARNING, ERROR] = [0, 1, 2]

/**
 * Makes any test file have the `jest` env available so ESLint
 * does not moan about `describe`, `it`, `test`, etc. all not
 * existing or being defined.
 */
const JEST_CONFIG = {
    files: [
        '*.test.js',
    ],
    env: {
        jest: true,
    }
}

/**
 * Ensures that any storybook 'wrapper' components do not need
 * to define prop-types as it is something of a waste of time.
 */
const STORYBOOK_CONFIG = {
    files : [
        '*.story.js'
    ],
    rules: {
        'react/prop-types': IGNORE
    }
}

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'react',
        'react-hooks',
        'import',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        }
    },
    env: {
        browser: true,
    },
    rules: {
        /**
         * Vanilla ESLint JS rules
         */
        'generator-star-spacing': [ERROR, 'after'],
        'object-curly-spacing': [ERROR, 'always'],
        'prefer-promise-reject-errors': WARNING,
        'no-console': [ERROR, { allow: ['warn', 'error'] }],

        /**
         * React specific rules
         */
        'react/prop-types': ERROR,
        'react/jsx-indent': [ERROR, 2],
        'react/jsx-uses-vars': WARNING,
        'react/jsx-uses-react': WARNING,
        'react/jsx-curly-spacing': [ERROR, 'never'],
        'react/jsx-curly-brace-presence': [ERROR, { props: 'never', children: 'never' }],
        'react/sort-prop-types': [ERROR, { sortShapeProp: true }],
        'react/jsx-closing-bracket-location': [ERROR, { location: 'line-aligned' }],
        'react/sort-comp': [ERROR, {
            order: [
                'static-methods',
                'instance-variables',
                'lifecycle',
                'everything-else',
                'handlers',
                'rendering'
            ],
            groups: {
                rendering: [
                    '/^render.+$/',
                    'render'
                ],
                handlers: [
                    '/^handle.+$/',
                ]
            }
        }],

        /**
         * React Hooks specific rules
         */
        'react-hooks/exhaustive-deps': WARNING,
        'react-hooks/rules-of-hooks': ERROR,

        /**
         * Import specific rules
         */
        'import/newline-after-import': ERROR,
        'import/order': [ERROR, { 'groups': [['builtin', 'external', 'internal'], 'parent', 'sibling', 'index'] }],
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [
        JEST_CONFIG,
        STORYBOOK_CONFIG,
    ]
}
