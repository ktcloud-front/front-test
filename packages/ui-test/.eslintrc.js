/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/index.js', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  ignorePatterns: ['.eslintrc.js'],
}
