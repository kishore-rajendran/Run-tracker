import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    model() {
        return this.store.query("activity-tracker", {
            userid: JSON.parse(localStorage.getItem('profile')).id,
        }).then((value) => {
            let data = [];
            value.forEach((value) => {
                data.push(value);
            })
            return data.sort((a, b) => b.date.localeCompare(a.date));
        })
    }
});
