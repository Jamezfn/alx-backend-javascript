import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        // Add any additional globals here if needed
      },
    },
  },
  {
    ...pluginJs.configs.recommended,
    rules: {
      // Your custom rules here
      'indent': ['error', 2], // Enforce 2-space indentation
      'quotes': ['error', 'single'], // Enforce single quotes
      'semi': ['error', 'always'], // Require semicolons
      // Add any other specific rules you want to enforce
    },
  },
];

