import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    activityTrackers: hasMany("activity-trackers"),
    posts: hasMany("posts"),
    children: hasMany("user-details", { inverse: null }),
    parent: belongsTo("user-details", { inverse: null })
});
