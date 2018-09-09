import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('employee', params.employee_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit employee');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('employees/form');
  },

  actions: {

    saveEmployee(employee) {
      employee.save().then(() => this.transitionTo('employees'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }

});
