import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    model() {
        //console.log(this);
        //return this.store.findRecord("user-detail", JSON.parse(localStorage.getItem("profile")).id);
        return this.store.findRecord("user-detail", JSON.parse(localStorage.getItem("profile")).id, {
            include: 'posts'
        });
    },

});
