import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr(),
    content: DS.attr(),
    image: DS.attr(),
    userDetail: DS.belongsTo('user-detail'),
});
