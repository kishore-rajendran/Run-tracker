import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    activityTrackers: hasMany("activity-trackers"),
    posts: hasMany("posts"),
    // friendLists: hasMany("friend-lists"),
    children: hasMany("user-details", { inverse: null }),
    parent: belongsTo("user-details", { inverse: null })
});
