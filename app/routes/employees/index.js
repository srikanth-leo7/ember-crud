import Route from '@ember/routing/route';

export default Route.extend({

  model() {
	return this.store.findAll('employee');
  },

  actions: {

    deleteEmployee(employee) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        employee.destroyRecord();
      }
    }
  }

});
