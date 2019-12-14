import Service from '@ember/service';

export default Service.extend({
    loggedIn: false,
    log() {
        this.set("loggedIn", true);
    },
    isLogged() {
        return this.loggedIn;
    }
});
