const mix = require('laravel-mix');

mix.js('src/js/x-card-rpg.js', 'scripts')
    .sass('src/css/x-card-rpg.scss', 'css');


// Add versioning to assets in production environment
if ( mix.inProduction() ) {
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    //drop_console: true,
                    pure_funcs: ['console.log', 'console.debug', 'console.warn']
                }
            }
        }
    });
    mix.version();

}
Mix.manifest.refresh = _ => void 0