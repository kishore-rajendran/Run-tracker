import Route from '@ember/routing/route';
//import { inject as service } from '@ember/service';


export default Route.extend({
    //    signedIn: service('login'),
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged) {
            this.transitionTo("login");
        }
    },
    model() {
        let id = JSON.parse(localStorage.getItem('profile')).id;
        return this.get("store").query("user-detail", {
            id: id,
            include: 'children.posts,posts'
        }).then((data) => {
            let posts = [];
            data.forEach((user) => {
                // console.log(user)
                user.posts.forEach((post) => {
                    posts.push({
                        name: user.name,
                        post: post
                    })
                })
                user.children.forEach((friend) => {
                    friend.posts.forEach((post) => {
                        posts.push({
                            name: friend.name,
                            post: post
                        })
                    })
                })
            })
            return posts;
        });
    },
});
