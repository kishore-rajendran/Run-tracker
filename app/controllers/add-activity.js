import Controller from '@ember/controller';
import { computed } from '@ember/object';
export default Controller.extend({
    // distance: null,
    // date: null,
    // type: "Jogging",

    pace: computed('model.distance', 'model.time', function () {
        console.log(this.model.distance)
        if (!this.model.distance || !this.model.time) return 0;
        return this.model.distance / (this.model.time / 60);
    }),

    actions: {
        updateType(value) {
            this.type = value;
        },
        updateDate(value) {
            this.date = value;
            console.log(value);
        },
        add(model) {
            model.save().then(() => {
                this.transitionToRoute('activity.history');
            })
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
