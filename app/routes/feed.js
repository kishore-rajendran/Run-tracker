import Route from '@ember/routing/route';
//import { inject as service } from '@ember/service';


export default Route.extend({
    //    signedIn: service('login'),
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    model() {
        let id = JSON.parse(localStorage.getItem('profile')).id;
        return this.get("store").findRecord("user-detail", id, {
            include: 'posts'
        });
    },
});
