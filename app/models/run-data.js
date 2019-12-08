import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    user: DS.belongsTo('user-details'),
    currentLocation: DS.attr('string'),
    distance: DS.attr('number'),
    date: DS.attr('date'),
    timeRun: DS.attr('number'),
});
