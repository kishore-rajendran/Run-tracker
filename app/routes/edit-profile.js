// import Route from '@ember/routing/route';

// export default Route.extend({
//     beforeModel() {
//         if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
//             this.transitionTo("login");
//         }
//     },
//     actions: {
//         setGender(choice) {
//             this.controller.gender = choice;
//         },
//         update() {
//             this.store.findRecord('user-detail', JSON.parse(localStorage.getItem("profile")).id).then((value) => {
//                 value.set("email", this.controller.email);
//                 value.set("name", this.controller.name);
//                 value.set("username", this.controller.username);
//                 value.set("gender", this.controller.gender);
//                 value.set("location", this.controller.location);
//                 value.save();
//             });
//             alert("updated")
//         }
//     },
//     setupController(controller) {
//         this._super(controller);
//         this.store.findRecord("user-detail", JSON.parse(localStorage.getItem("profile")).id).then((value) => {
//             controller.set("email", value.email);
//             controller.set("name", value.name);
//             controller.set("username", value.username);
//             controller.set("gender", value.gender);
//             controller.set("male", false);
//             controller.set("female", false);
//             controller.set("others", false);
//             controller.set("location", value.location);
//             switch (value.gender) {
//                 case "male": controller.set("male", true); break;
//                 case "female": controller.set("female", true); break;
//                 case "others": controller.set("others", true); break;
//             }
//         });
//     }

// });
