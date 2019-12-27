import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    signedIn: service('login'),
    notifications: service('toast'),
    ajax: service(),
    actions: {
        validate() {
            this.get('ajax').request('/authenticate', {
                method: 'POST',
                data: JSON.stringify({
                    username: this.controller.username,
                    password: this.controller.password,
                }),
            }).then((value) => {
                localStorage.setItem("profile", JSON.stringify({ id: value, logged: true }));
                this.notifications.success("Login Successful", "Login", {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": true,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                });
                this.transitionTo("feed");
            }).catch(() => {
                this.notifications.error("Login failed", "Login", {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": true,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                });
            });
        }
    },
    setupController(controller) {
        this._super(controller);
        controller.set("username", null);
        controller.set("password", null);
    }
});
