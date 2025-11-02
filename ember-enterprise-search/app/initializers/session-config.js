/* eslint-disable no-console */
// app/initializers/session-config.js

export function initialize(application) {
  // Hàm này là nơi bạn thực hiện các cấu hình cần thiết
  // trước khi ứng dụng chính thức khởi động (ví dụ: đăng ký services, inject, v.v.)

  console.log('Initializer: sessionconfig đang được khởi tạo - session-config.js:8');

  // Ví dụ: Đăng ký một giá trị cấu hình cho toàn ứng dụng
  application.register('config:session', {
    appName: 'EmberEnterpriseSearch',
    timeout: 3600, // Thời gian timeout phiên
    retryLimit: 3    // Giới hạn thử lại kết nối
  }, { instantiate: false }); // { instantiate: false } thường được dùng cho các giá trị cấu hình đơn giản.

  // Ví dụ: Tiêm (Inject) cấu hình này vào tất cả các routes và controllers
  application.inject('route', 'sessionConfig', 'config:session');
  application.inject('controller', 'sessionConfig', 'config:session');
}

export default {
  name: 'session-config',
  // Nếu bạn muốn initializer này chạy trước một initializer khác (ví dụ: 'data-store'),
  // bạn có thể thêm thuộc tính 'before':
  // before: 'data-store',
  initialize
};
