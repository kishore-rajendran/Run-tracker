import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    actions: {

        add() {
            let userDetail = this.store.findRecord('user-detail', JSON.parse(localStorage.getItem('profile')).id);
            var activity = {
                time: this.controller.time,
                date: this.controller.date,
                distance: this.controller.distance,
                runTime: this.controller.time,
                type: this.controller.type,
                userDetail: userDetail,
                //userid: String(JSON.parse(localStorage.getItem('profile')).id),

            }
            let activityTracker = this.store.createRecord('activity-tracker', activity);
            activityTracker.save();
        },
    },

});
