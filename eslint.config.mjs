import js from '@eslint/js';
import globals from 'globals';
// import { defineConfig } from "eslint/config";

export default [
    js.configs.recommended, // including recommended rules if needed
    {
    // This configuration object applies to all files by default
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
                // You can also add custom global variables like this:
                myCustomGlobal: 'readonly' // or "writable"
            }
        },

        rules: {
            // files: ['src/**/*.js'],
            'no-underscore-dangle': [ 'off' ], // двойное подчеркивание перед/после переменной
            'import/no-extraneous-dependencies': 'off', // импорт из дев-зависимостей

            indent: [
                'error', 4
            ],
            // отступы, авто
            semi: [
                'error', 'always'
            ],
            // точка с запятой, авто
            'no-unused-vars': 'off', // не испоьзуемые переменные
            'no-console': 'off', // console.log
            'no-var': 'error',

            'max-len': [
                'error', { code: 120 }
            ],
            // длинна строки, нет авто
            // одинарные кавычки, авто
            quotes: [
                'error', 'single'
            ], // одинарные кавычки, авто
            'array-bracket-spacing': [
                'error', 'always'
            ],
            // пробелы внутри массива - авто
            // 'array-bracket-newline': [
            //     'error', {
            //         'multiline': true, 'minItems': 2
            //     }
            // ],
            // перенос элементов массива на новые строки, если многоэлементный - авто
            'object-curly-spacing': [
                'error', 'always'
            ],
            // пробелы внутри объекта
            'object-curly-newline': [
                'error', {
                    'ObjectExpression': {
                        'multiline': true, 'minProperties': 2
                    },
                }
            ],
            // перенос свойств объекта на новые строки, если много свойств - авто
            'no-multi-spaces': [
                'error',
                {
                    exceptions: {
                        'Property': false,
                        'BinaryExpression': true,
                        'VariableDeclarator': true,
                        'ImportDeclaration': true
                    }
                }
            ], // убираем много пробелов в разных местах, авто
            'key-spacing': [
                'error', { 'mode': 'strict' }
            ],
            'no-trailing-spaces': 'error',
            'no-multiple-empty-lines': [
                'error', {
                    max: 1, // одна внутренняя
                    maxBOF: 1, // одна сверху в импортах
                }
            ],
        },

    }
];
