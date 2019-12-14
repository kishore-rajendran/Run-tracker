import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('registration');
  this.route('login', { path: '/' });
  this.route('feed');
  this.route('activity', function () {
    this.route('daily');
    this.route('weekly');
    this.route('monthly');
    this.route('history');
  });
  this.route('profile');
  this.route('friend');
  this.route('change-password');
  this.route('view-friend', { path: '/view-friend/:id' });
  this.route('create-post');
  this.route('edit-profile');
  this.route('add-activity');
});

export default Router;
