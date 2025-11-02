/* eslint-disable no-console */
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Thêm log ngay sau khi khởi tạo Router
console.log('Router: - router.js:11', Router);

Router.map(function () {
});

export default Router;
