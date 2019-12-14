import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    actions: {
        search(model) {
            this.store.query('user-detail', {
                username: model.userSearch,
            }).then((value) => {
                if (value.length === 0) alert('User not found');
                else {
                    value.forEach((user) => {
                        this.transitionTo('view-friend', user.id);
                    })
                }
            })
        },
        follow(user_id, model) {
            let friends = JSON.parse(model.user.friends);
            friends.push(+user_id)
            model.user.friends = JSON.stringify(friends);
            model.user.save();
            model.friends.forEach((user1) => {
                if (user1.id === user_id) {
                    let friends = JSON.parse(user1.friends);
                    friends.push(+model.user.id);
                    user1.friends = JSON.stringify(friends);
                    user1.save();
                }
            })
        }
    },
    model() {
        return this.store.query("user-detail", {}).then((value) => {
            let userName = {
                userSearch: null,
                user: '',
                friends: []
            };
            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
            }
            value.forEach((user) => {
                if (!(user.id == JSON.parse(localStorage.getItem('profile')).id)) {
                    userName.friends.push(user);
                }
                else {
                    userName.user = user;
                }
            })
            shuffle(userName.friends);
            userName.friends.slice(0, 5);
            return userName;
        })
    },






    // setupController(controller, model) {
    //     this._super(controller);
    //     controller.set('model', model);
    //     controller.set('actions', {
    //         follow(user_id) {
    //             let id = JSON.parse(localStorage.getItem('profile')).id;
    //             this.store.query('user-detail', {
    //                 id: id,
    //             }).then((user1) => {
    //                 user1.forEach((user1) => {
    //                     let friends = JSON.parse(user1.friends);
    //                     friends.push(+user_id)
    //                     user1.friends = JSON.stringify(friends);
    //                     user1.save();
    //                 })
    //             })

    //             model.forEach((user1) => {
    //                 if (user1.id === user_id) {
    //                     let friends = JSON.parse(user1.friends);
    //                     friends.push(+id);
    //                     user1.friends = JSON.stringify(friends);
    //                     user1.save();
    //                 }
    //             })
    //             controller.set('model', model);
    //         }
    //     })
    // }
});
