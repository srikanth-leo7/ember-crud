import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('employee');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new employee');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('employees/form');
  },

  actions: {

    saveEmployee(newEmployee) {
      newEmployee.save().then(() => this.transitionTo('employees'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
