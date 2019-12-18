import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    username: DS.attr(),
    name: DS.attr(),
    gender: DS.attr(),
    location: DS.attr(),
    email: DS.attr(),
    password: DS.attr(),
    //friends: DS.attr(),
    //friendLists: DS.hasMany('friend-list'),
    children: DS.hasMany("user-detail", { inverse: null }),
    parent: DS.belongsTo("user-detail", { inverse: null }),
    posts: DS.hasMany('post'),
    activityTrackers: DS.hasMany("activity-tracker"),
});
