import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },

    model() {
        let userDetail = this.store.findRecord('user-detail', JSON.parse(localStorage.getItem('profile')).id);
        return this.store.createRecord('activity-tracker', {
            time: null,
            distance: null,
            runTime: null,
            date: null,
            type: null,
            userDetail: userDetail,
        })
    },

    actions: {
        updateType(value) {
            this.type = value;
        },
        updateDate(value) {
            this.date = value;
            console.log(value);
        },
        add(model) {
            model.save().then(() => {
                this.transitionToRoute('activity.history');
            })
        }
        //     add() {
        //         // let userDetail = this.store.findRecord('user-detail', JSON.parse(localStorage.getItem('profile')).id);
        //         var activity = {
        //             time: this.controller.time,
        //             date: this.controller.date,
        //             distance: this.controller.distance,
        //             runTime: this.controller.time,
        //             type: this.controller.type,
        //             userDetail: userDetail,
        //             //userid: String(JSON.parse(localStorage.getItem('profile')).id),

        //         }
        //         let activityTracker = this.store.createRecord('activity-tracker', activity);
        //         activityTracker.save();
        //     },
    },

});
