module.exports = {
  plugins: {
    'postcss-wrap': {
      selector: '[.widget-instance]',
    },
    // tailwindcss: {},
    // autoprefixer: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
  },
};
