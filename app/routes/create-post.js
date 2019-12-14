import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },

    actions: {
        create(model) {
            model.save();
            this.transitionTo('feed');
        }
    },

    model() {
        let userDetail = this.store.findRecord('user-detail', JSON.parse(localStorage.getItem('profile')).id);
        return this.store.createRecord('post', {
            title: null,
            image: null,
            content: null,
            userDetail: userDetail,
        });
    }
});
