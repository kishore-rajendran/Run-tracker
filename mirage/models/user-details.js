import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    //activityTrackers: hasMany("activity-trackers"),
    posts: hasMany("posts"),
    //friendLists: hasMany("friend-lists")
});
