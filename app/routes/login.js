import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    signedIn: service('login'),
    ajax: service(),

    actions: {
        validate() {
            // if (this.controller.email == "kishore@zoomrx.com" && this.controller.password == "123456789") {
            //     this.signedIn.log();
            //     this.transitionTo("feed");
            // }
            this.get('ajax').request('/authenticate', {
                method: 'POST',
                data: JSON.stringify({
                    username: this.controller.username,
                    password: this.controller.password,
                }),
            }).then((value) => {
                localStorage.setItem("profile", JSON.stringify({ id: value, logged: true }));
                this.transitionTo("feed");
            }).catch((value) => {
                alert(value);
            });
        }
    },
    setupController(controller) {
        this._super(controller);
        controller.set("username", null);
        controller.set("password", null);
    }
});
