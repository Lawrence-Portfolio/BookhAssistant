const path = require('path')
const mix = require('laravel-mix');

const sassFileList = [
    'build/scss/common',
    'partials/pages/index',
    'partials/pages/services/services-listing',
    'partials/pages/services/services-card',
    'partials/pages/portfolio/portfolio-listing',
    'partials/pages/portfolio/portfolio-card',
    'partials/pages/info/about-company',
    'partials/pages/info/history-company',
    'partials/pages/info/collective',
    'partials/pages/info/licenses',
    'partials/pages/info/technologies',
    'partials/pages/info/clients',
    'partials/pages/info/partners',
    'partials/pages/info/faq',
    'partials/pages/info/requisites'
];

const jsFileList = [
    'build/js/common',
    'partials/pages/index',,
    'partials/pages/services/services-listing',
    'partials/pages/services/services-card',
    'partials/pages/info/faq'
];

mix.setPublicPath('assets/')
mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
});
mix.postCss('build/css/tailwind.css', 'css/tailwind.css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-gap-properties'),
    require('autoprefixer'),
])

jsFileList.forEach(fileName => mix.ts(`./${fileName}.ts`, 'js'));

sassFileList.forEach(
    fileName => mix.sass(`./${fileName}.scss`, 'css')
        .options({processCssUrls: false})
);

mix.sourceMaps(true, 'source-map');
mix.version()
