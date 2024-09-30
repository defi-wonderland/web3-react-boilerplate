import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/dist', '**/eslint.config.mjs'],
  },
  ...fixupConfigRules(
    compat.extends(
      'prettier',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:@next/next/recommended',
    ),
  ),
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      'react-refresh': reactRefresh,
      import: fixupPluginRules(importPlugin),
      prettier: fixupPluginRules(prettierPlugin),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
    },
    rules: {
      'import/order': [
        'error',
        {
          // Enforce a specific import order
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
      // Prettier plugin to apply formatting rules
      'prettier/prettier': 'error', // This tells ESLint to show Prettier errors as ESLint errors
      '@typescript-eslint/no-empty-object-type': 'none',
    },
    settings: {
      // Spread Prettier config to disable conflicting ESLint rules
      ...prettierConfig,
      react: {
        version: 'detect',
      },
    },
  },
];
