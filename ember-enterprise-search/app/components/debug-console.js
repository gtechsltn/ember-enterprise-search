import Component from '@ember/component';

export default Component.extend({
  message: 'Đang tải ứng dụng Ember...',
  didInsertElement() {
    setTimeout(() => this.element.remove(), 1000);
  }
});
