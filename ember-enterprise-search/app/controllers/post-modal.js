import Controller from '@ember/controller';

export default Controller.extend({
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('model', null);
    }
  },
});
