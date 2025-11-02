/* eslint-disable no-console */
import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

// Thêm log ngay sau khi import config
console.log('Cấu hình ENV đang dùng: - app.js:8', config);

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

// Thêm log ngay sau khi khởi tạo App
console.log('App: - app.js:17', App);

loadInitializers(App, config.modulePrefix);

export default App;
