import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    userDetail: DS.belongsTo('user-detail'),
    //userid: DS.attr(),
    distance: DS.attr(),
    date: DS.attr(),
    runTime: DS.attr(),
    type: DS.attr(),
});
