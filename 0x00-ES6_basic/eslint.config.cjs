module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript standard
      sourceType: 'module',
    },
    rules: {
      // Add ESLint rules here, example:
      'no-console': 'warn', // Warn when using console.log
    },
  },
];
