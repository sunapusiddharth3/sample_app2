import { moduleForModel, test } from 'ember-qunit';

moduleForModel('teacher-time-table-data', 'Unit | Model | teacher time table data', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
