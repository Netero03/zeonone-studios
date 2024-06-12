const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...process.env.NODE_ENV === 'production' ? [purgecss] : [],
  },
}
