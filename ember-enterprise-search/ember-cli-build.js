'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss'
    },
    includePaths: [
      // Example: Exposing a directory within your app's main folder,
      // useful for shared variables, mixins, or utilities.
      'app/styles',
      //'node_modules/bootstrap-sass/assets/stylesheets'
      // Example: If an addon placed assets here, you could include it:
      // 'node_modules/my-scss-addon/styles/public'
    ]
  });

  // Import Bootstrap JS and CSS
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');

  // Import Font Awesome CSS
  app.import('node_modules/font-awesome/css/font-awesome.min.css');

  // Import Font Awesome fonts
  app.import('node_modules/font-awesome/fonts/fontawesome-webfont.eot', { destDir: 'fonts' });
  app.import('node_modules/font-awesome/fonts/fontawesome-webfont.svg', { destDir: 'fonts' });
  app.import('node_modules/font-awesome/fonts/fontawesome-webfont.ttf', { destDir: 'fonts' });
  app.import('node_modules/font-awesome/fonts/fontawesome-webfont.woff', { destDir: 'fonts' });
  app.import('node_modules/font-awesome/fonts/fontawesome-webfont.woff2', { destDir: 'fonts' });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
