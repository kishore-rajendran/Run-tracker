import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    actions: {
        confirm(model) {
            this.store.findRecord('user-detail', JSON.parse(localStorage.getItem('profile')).id).then((user) => {
                if (user.password == model.oldPassword) {
                    user.password = model.newPassword;
                    user.save();
                    this.transitionTo('profile');
                }
                else {
                    alert("Enter Correct Password")
                }
            })
        }
    },
    model() {
        return {
            newPassword: null,
            oldPassword: null,
        }
    }
});
