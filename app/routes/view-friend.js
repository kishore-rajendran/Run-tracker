import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },

    model(params) {
        return this.store.findRecord("user-detail", params.id, {
            include: 'posts'
        }).then((user) => {
            return {
                id: JSON.parse(localStorage.getItem('profile')).id,
                user: user,
            }
        })
    },

    actions: {
        follow(model) {
            let friends = JSON.parse(model.user.friends);
            friends.push(+model.id)
            model.user.friends = JSON.stringify(friends);
            model.user.save();
            this.store.findRecord("user-detail", model.id).then((user1) => {
                let friends = JSON.parse(user1.friends);
                friends.push(+model.user.id);
                user1.friends = JSON.stringify(friends);
                user1.save();
            })
            // model.friends.forEach((user1) => {
            //     if (user1.id === model.id) {
            //         let friends = JSON.parse(user1.friends);
            //         friends.push(+model.user.id);
            //         user1.friends = JSON.stringify(friends);
            //         user1.save();
            //     }
            // })
        }
    },
});
