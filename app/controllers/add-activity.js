import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    notifications: service('toast'),

    pace: computed('model.{distance,runTime}', function () {
        if (!this.model.distance || !this.model.runTime) return 0;
        return this.model.distance / (this.model.runTime / 60);
    }),

    actions: {
        updateType(value) {
            this.model.type = value;
        },
        updateDate(value) {
            this.model.date = value;
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
                this.notifications.error("All fields are Mandatory", "Activity Creation Failed", {
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
    }
});
