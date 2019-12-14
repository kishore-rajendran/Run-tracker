import Controller from '@ember/controller';
import { computed } from '@ember/object';
export default Controller.extend({
    distance: null,
    date: null,
    type: "Jogging",

    pace: computed('distance', 'time', function () {
        if (!this.distance || !this.time) return 0;
        return this.distance / (this.time / 60);
    }),

    actions: {
        updateType(value) {
            this.type = value;
        },
        updateDate(value) {
            this.date = value;
            console.log(value);
        }
    }
})



//     setupController(controller) {
//         this._super(controller);
//         controller.set("time", null);
//         controller.set("distance", null);
//         controller.set("date", null);
//         // controller.set("pace", null);
//         controller.set("type", 'Jogging');
//         controller.set(
//             "actions", {
//             ,

//         )
//         // computed(controller.get("distance"), controller.get("time"), function () {
//         //     console.log("1");
//         // })
//     }
// });
