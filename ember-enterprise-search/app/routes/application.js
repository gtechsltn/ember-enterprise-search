/* eslint-disable no-console */
import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';
import $ from 'jquery';

export default Route.extend({
  model() {
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
          console.error('AJAX error: - application.js:21', textStatus, errorThrown);
          reject(errorThrown);
        },
        complete() {
          // Hide spinner after the request finishes
          $('#loadingSpinner').hide();
        }
      });
    });
  },
  afterModel() {
    // Run after the template has rendered
    scheduleOnce('afterRender', this, function () {
      if ($ && $.fn.tooltip) {
        // Initialize Bootstrap tooltip
        $('#tooltipBtn').tooltip();
        console.log('Tooltip initialized, Bootstrap JS loaded. - application.js:37');
      } else {
        console.log('Bootstrap tooltip not available. - application.js:39');
      }

      // Log jQuery and Bootstrap versions
      if ($) {
        console.log('jQuery version: - application.js:44', $.fn.jquery);
      }

      if ($ && $.fn.tooltip && $.fn.tooltip.Constructor) {
        console.log('Bootstrap version: - application.js:48', $.fn.tooltip.Constructor.VERSION);
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
        console.log(`Rightclicked on ${field}: ${value} - application.js:62`);

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
