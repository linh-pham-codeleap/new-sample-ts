// eslint.config.mjs
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    // Specify the environment for the linting (e.g., browser, node, etc.)
    env: {
        browser: true,
        node: true,
        es2023: true, // Set the environment to ES2023
    },

    // Set the parser to TypeScript
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2023, // Target ES2023
        sourceType: 'module',
        project: './tsconfig.json',
    },

    // Extend recommended rules for TypeScript and ESLint
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
    ],
    // Include plugins for TypeScript
    plugins: ['@typescript-eslint'],
    rules: {
        // Requires strict handling of boolean expressions, disallowing ambiguous values like `0` or `''`.
        '@typescript-eslint/strict-boolean-expressions': 'error', 

        // Prevents unused variables, but allows ignoring ones that start with an underscore.
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        // Disallows the use of the `any` type to ensure strong typing.
        '@typescript-eslint/no-explicit-any': 'error',

        // Requires functions to explicitly declare their return types.
        '@typescript-eslint/explicit-function-return-type': 'error',

        // Prevents explicit types for variables or parameters where the type can be inferred.
        '@typescript-eslint/no-inferrable-types': 'error',

        // Disallows using the `!` (non-null assertion operator) to avoid potential runtime errors.
        '@typescript-eslint/no-non-null-assertion': 'error',

        // Disallows empty interfaces, ensuring that interfaces are meaningful.
        '@typescript-eslint/no-empty-interface': 'error', 

         // Prefers `readonly` properties where possible for immutability.
        '@typescript-eslint/prefer-readonly': 'error',

         // Enforces consistent usage of `interface` over `type` for object types.
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

         // Requires explicit return types on functions exported from a module.
        '@typescript-eslint/explicit-module-boundary-types': 'error',

        // Warns on the use of `console.log`, `console.error`, etc., to prevent leaving debug statements in production.
        'no-console': 'warn',

         // Disallows the use of `debugger` statements.
        'no-debugger': 'error',

         // Enforces the use of `const` for variables that are not reassigned.
        'prefer-const': 'error',
    },
    overrides: [
        {
            // Apply rules only to .ts and .tsx files
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-floating-promises': 'error',
                '@typescript-eslint/no-misused-promises': 'error',
                '@typescript-eslint/consistent-type-imports': 'error',
            },
        },
    ],
});
