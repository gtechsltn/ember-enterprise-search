/* eslint-disable no-console */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
  router: service(),
  model() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/mock/posts.json',
        method: 'GET',
        dataType: 'json',
        success(data) {
          console.log('Dữ liệu nhận được: - posts.js:15', data);
          //setTimeout(() => resolve(data), 1000);
          // Giả lập lỗi ngẫu nhiên 30%
          if (Math.random() < 0.3) {
            reject('Lỗi ngẫu nhiên khi tải danh sách!');
          } else {
            setTimeout(() => resolve(data), 1000);
          }
        },
        error(err) {
          console.error('Không nhận được dữ liệu - posts.js:25');
          reject(err);
        }
      });
    });
  },

  actions: {
    showModal(post) {
      this.router.transitionTo('post-modal', post.id); // Điều hướng đến route modal
    }
  }
});
