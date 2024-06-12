import purgecssModule from '@fullhuman/postcss-purgecss';

const purgecss = purgecssModule({
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
