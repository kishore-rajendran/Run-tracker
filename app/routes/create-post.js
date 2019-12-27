import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    notifications: service('toast'),

    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },

    model() {
        let userDetail = this.store.findRecord('user-detail', JSON.parse(localStorage.getItem('profile')).id);
        return this.store.createRecord('post', {
            title: null,
            image: null,
            content: null,
            userDetail: userDetail,
        });
    },

    actions: {
        create(model) {
            if (model.title !== null && model.image !== null && model.content != null) {
                model.save().then(() => {
                    this.notifications.success("Poat Creation Successful", "Post", {
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
                    this.transitionTo('feed');
                }).catch(() => {
                    this.notifications.error("Poat Creation Failed", "Post", {
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
                })
            }
            else {
                this.notifications.error("All fields need to be filled", "Poat Creation Failed", {
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
            }
        }
    },
});
