import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | registration/change-password', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:registration/change-password');
    assert.ok(route);
  });
});
