import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    model() {
        return this.store.findRecord("user-detail", JSON.parse(localStorage.getItem('profile')).id, {
            reload: true,
            include: 'activityTrackers'
        }).then((value) => {
            // let data = [];
            // value.activityTrackers.forEach((value) => {
            //     data.push(value);
            // })
            // return data.sort((a, b) => b.date.localeCompare(a.date));
            return value.activityTrackers.sortBy('date').reverseObjects();
        })
    }
});
