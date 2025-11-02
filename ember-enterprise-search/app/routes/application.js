/* eslint-disable no-console */
import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';
import $ from 'jquery';

export default Route.extend({
  model() {

    const config = this.sessionConfig;

    console.log(`Cấu hình Session đang dùng: - application.js:11`, config);
    console.log(`Thời gian Timeout (từ config): ${config.timeout} giây - application.js:12`);

    // Ví dụ về logic:
    // Nếu ứng dụng đang chạy trong môi trường phát triển, hãy thiết lập timeout ngắn hơn
    if (config.appName === 'EmberEnterpriseSearch') {
      console.log(`Cấu hình AppName đang dùng: - application.js:17`, config.appName);
      // ... thực hiện logic
    }

    // Return a Promise so Ember waits for it
    return new Promise((resolve, reject) => {
      // Show spinner
      $('#loadingSpinner').show();

      $.ajax({
        url: '/mock/users.json',
        method: 'GET',
        dataType: 'json',
        success(data) {
          setTimeout(() => resolve(data), 2000); // resolve(data);
        },
        error(jqXHR, textStatus, errorThrown) {
          console.error('AJAX error: - application.js:34', textStatus, errorThrown);
          reject(errorThrown);
        },
        complete() {
          // Hide spinner after the request finishes
          $('#loadingSpinner').hide();
        }
      });
    });
  },

  afterModel(model, transition) {

    console.log(`afterModel > model: - application.js:47`, model);
    console.log(`afterModel > transition: - application.js:48`, transition);

    if (this.sessionConfig.retryLimit === 0) {
      console.log(`afterModel > sessionConfig.retryLimit: - application.js:51`, this.sessionConfig.retryLimit);
      // Logic xử lý khi giới hạn thử lại bằng 0
      // Ví dụ: Chuyển hướng đến trang lỗi
      transition.transitionTo('error-page');
    }

    // Run after the template has rendered
    scheduleOnce('afterRender', this, function () {
      if ($ && $.fn.tooltip) {
        // Initialize Bootstrap tooltip
        $('#tooltipBtn').tooltip();
        console.log('Tooltip initialized, Bootstrap JS loaded. - application.js:62');
      } else {
        console.log('Bootstrap tooltip not available. - application.js:64');
      }

      // Log jQuery and Bootstrap versions
      if ($) {
        console.log('jQuery version: - application.js:69', $.fn.jquery);
      }

      if ($ && $.fn.tooltip && $.fn.tooltip.Constructor) {
        console.log('Bootstrap version: - application.js:73', $.fn.tooltip.Constructor.VERSION);
      }

      // Hide context menu on click anywhere
      $(document).on('click', function () {
        $('#contextMenu').hide();
      });

      // Right-click handler for table cells
      $('#userTable').on('contextmenu', '.context-cell', function (e) {
        e.preventDefault();

        const field = $(this).data('field');
        const value = $(this).text();
        console.log(`Rightclicked on ${field}: ${value} - application.js:87`);

        // Position and show context menu
        $('#contextMenu')
          .css({
            display: 'block',
            left: e.pageX,
            top: e.pageY
          })
          .data('cell', { field, value });
      });

      // Handle context menu actions
      $('#editCell').on('click', function (e) {
        e.preventDefault();
        const cell = $('#contextMenu').data('cell');
        alert(`Edit ${cell.field}: ${cell.value}`);
      });

      $('#deleteRow').on('click', function (e) {
        e.preventDefault();
        const cell = $('#contextMenu').data('cell');
        alert(`Delete row with ${cell.field}: ${cell.value}`);
      });

    });
  }
});
