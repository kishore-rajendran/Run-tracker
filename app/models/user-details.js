import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr(),
    gender: DS.attr(),
    location: DS.attr(),
    email: DS.attr(),
    connection: DS.hasMany('friend-list'),
    runData: DS.belongsTo("run-data"),
});
