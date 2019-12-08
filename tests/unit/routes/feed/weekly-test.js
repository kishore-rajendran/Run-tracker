import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | feed/weekly', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:feed/weekly');
    assert.ok(route);
  });
});
