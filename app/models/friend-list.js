import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    friend: DS.belongsTo('user-details'),
});
