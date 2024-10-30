import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: { ...globals.browser, jest: true } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'dist/**',
      'tests/**',
      'public/**',
      '.yarn/**',
      'node_modules/**',
      'build/**',
      'scripts/**',
      'eslint.config.js',
      'jest.config.js',
      'jest-base.js',
    ],
  },
  {
    rules: {
      'no-prototype-builtins': 'off',
    },
  },
];
