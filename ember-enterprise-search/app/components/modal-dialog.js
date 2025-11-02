import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  classNames: ['modal-backdrop'],
  actions: {
    close() {
      this.get('onClose')();
    }
  }
});
