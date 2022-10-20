module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  semi: false,
  plugins: [require('prettier-plugin-tailwindcss')],
}
