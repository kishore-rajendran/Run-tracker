import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    userDetails: belongsTo("user-details"),
});
