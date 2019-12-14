import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        logout() {
            localStorage.setItem("profile", JSON.stringify({ id: false, logged: false }));
            this.transitionToRoute('login');
        }
    }
});
