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
        return this.store.createRecord('activity-tracker', {
            distance: null,
            runTime: null,
            date: null,
            type: "Jogging",
            userDetail: userDetail,
        })
    },

    actions: {
        updateType(value) {
            this.type = value;
        },
        updateDate(value) {
            this.date = value;
        },
        add(model) {
            if (model.runTime !== null && model.date !== null && model.distance !== null) {
                model.save().then(() => {
                    this.notifications.success("Activity Creation Successful", "Activity", {
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
                    this.transitionToRoute('activity.history');
                }).catch(() => {
                    this.notifications.error("Activity Creation Failed", "Activity", {
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
            else {
                this.notifications.error("ALL fields are Mandatory", "Activity Creation Failed", {
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
