import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employees', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:employee_id' });
  });
});

export default Router;
