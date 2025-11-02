/* eslint-disable no-console */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
  router: service(),
  renderTemplate(controller, model) {
    // Render modal view vào outlet phụ 'modal'
    this.render('post-modal', {
      into: 'application',
      outlet: 'modal',
      model: model
    });
  },

  model(params) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/mock/posts.json',
        method: 'GET',
        dataType: 'json',
        success(data) {
          console.log('Dữ liệu nhận được: - post-modal.js:24', data);
          let post = data.find(item => item.id === parseInt(params.post_id, 10));
          setTimeout(() => resolve(post), 1000);
        },
        error(err) {
          console.error('Không nhận được dữ liệu - post-modal.js:29');
          reject(err);
        }
      });
    });
  },

  actions: {
    closeModal() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
      this.router.transitionTo('posts');
    }
  }
});
