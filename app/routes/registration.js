import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        setGender(choice) {
            this.controller.gender = choice;
        },
        register() {
            var register = {
                email: this.controller.email,
                name: this.controller.name,
                username: this.controller.username,
                gender: this.controller.gender,
                location: this.controller.location,
                password: this.controller.password,
            };
            this.transitionTo('login');
            let userDetail = this.store.createRecord('user-detail', register);
            userDetail.save().then((value) => {
                alert(value);
            });
        }
    },
    setupController(controller) {
        this._super(controller);
        controller.set("email", null);
        controller.set("name", null);
        controller.set("username", null);
        controller.set("gender", null);
        controller.set("location", null);
        controller.set("password", null);
    }
});
