/* eslint-disable no-console */
import Route from '@ember/routing/route';

export default Route.extend({
  // Dữ liệu global của ứng dụng (nếu cần)
  model() {
    return {};
  },

  actions: {
    // Dùng khi có lỗi toàn cục
    error(error, transition) {
      console.error('Transition trong ứng dụng: - application.js:13', transition);
      console.error('Lỗi toàn ứng dụng: - application.js:14', error);
      // Cho phép Ember tự động render error.hbs toàn cục
      return true;
    },

    // Dùng khi có loading toàn cục (các route con đang pending)
    loading(transition, originRoute) {
      console.log('Đang tải dữ liệu từ route: - application.js:21', originRoute.routeName);
      // Cho phép Ember render loading.hbs toàn cục
      return true;
    },

    // Đóng modal outlet phụ
    closeModal() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
