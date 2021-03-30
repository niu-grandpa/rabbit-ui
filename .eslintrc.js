module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // 忽略 ts 注释警告
        '@typescript-eslint/ban-ts-comment': 'off',
        // 忽略 any 类型警告
        '@typescript-eslint/no-explicit-any': 'off'
    }
};