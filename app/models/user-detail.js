import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    username: DS.attr(),
    name: DS.attr(),
    gender: DS.attr(),
    location: DS.attr(),
    email: DS.attr(),
    password: DS.attr(),
    friends: DS.attr(),
    //    friendList: DS.hasMany('friend-list'),
    posts: DS.hasMany('post'),
    //    activityTrackers: DS.belongsTo("activity-tracker"),
});
