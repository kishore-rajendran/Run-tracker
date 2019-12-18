import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },

    model(params) {
        return RSVP.hash({
            user: this.store.findRecord("user-detail", JSON.parse(localStorage.getItem('profile')).id, {
                reload: true,
                include: 'children,posts'
            }).then((value) => {
                value.children.forEach((user) => {
                    console.log(user.name)
                })
                return value;
            }),
            friend: this.store.findRecord("user-detail", params.id, {
                include: 'children,posts'
            })
        });
    },

    actions: {
        follow(model) {
            model.user.get('children').addObject(model.friend);
            model.friend.get('children').addObject(model.user);
            model.user.save();
            model.friend.save();
            // console.log(model.user.get('children'))
            // model.friend.children.push(model.user);
            // model.user.children.push(model.friend);
            // model.friend.save();
            // model.user.save();
            // let friends = JSON.parse(model.user.friends);
            // friends.push(+model.id)
            // model.user.friends = JSON.stringify(friends);
            // model.user.save();
            // this.store.findRecord("user-detail", model.id).then((user1) => {
            //     let friends = JSON.parse(user1.friends);
            //     friends.push(+model.user.id);
            //     user1.friends = JSON.stringify(friends);
            //     user1.save();
            // })
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
