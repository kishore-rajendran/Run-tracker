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
        return this.store.findRecord("user-detail", JSON.parse(localStorage.getItem("profile")).id, {
            include: 'posts'
        });
    },

    actions: {
        save(model) {
            let oldPassword = this.controller.get('oldPassword');
            let newPassword = this.controller.get('newPassword');
            if (oldPassword === model.password || (oldPassword === null && newPassword === null)) {
                if (oldPassword) {
                    model.password = newPassword;
                }
                model.save().then(() => {
                    this.notifications.success("Edit Successful", "Profile", {
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
                    this.controller.set('oldPassword', null);
                    this.controller.set('newPassword', null);
                    this.controller.set('editMode', false);
                    this.controller.set('passwordChangeMode', false);
                }).catch(() => {
                    this.notifications.error("Edit Failed", "Profile", {
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
                this.controller.set('oldPassword', null);
                this.controller.set('newPassword', null);
                this.notifications.error("Edit Failed ", "Profile", {
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

        },
        editOn() {
            this.controller.set("editMode", true);
        }
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('editMode', false);
        controller.set('passwordChangeMode', false)
        controller.set('newPassword', null);
        controller.set('oldPassword', null);
        controller.set('actions', {
            changePassword: function () {
                controller.set('passwordChangeMode', true)
            }
        })
    }

});
