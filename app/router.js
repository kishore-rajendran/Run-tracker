import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('registration');
  this.route('login', { path: '/' });  //change notification as service
  this.route('feed');
  this.route('activity', function () {
    this.route('daily');
    this.route('weekly');
    this.route('monthly');
    this.route('history');
  });
  this.route('profile'); //change password new section and if possible add inplace edit instead on inline edit
  this.route('friend'); //combine two if statements into one
  this.route('view-friend', { path: '/view-friend/:id' });
  this.route('create-post');
  this.route('add-activity');
});

export default Router;
