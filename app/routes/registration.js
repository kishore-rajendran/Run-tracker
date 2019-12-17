import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    notifications: service('toast'),

    model() {
        return this.store.createRecord('user-detail', {
            email: null,
            name: null,
            username: null,
            gender: null,
            location: null,
            password: null,
        })
    },

    actions: {
        setGender(choice, model) {
            model.gender = choice;
        },
        register(model) {
            model.save().then(() => {
                this.notifications.success("Registration Successful", "Registration", {
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
                this.transitionTo('login');
            }).catch(() => {
                this.notifications.error("Registration Failed", "Registration", {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
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
                this.transitionTo('registration');
            })
        }
    },
});
