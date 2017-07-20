import { moduleForModel, test } from 'ember-qunit';

moduleForModel('teacher-time-table-data', 'Unit | Serializer | teacher time table data', {
  // Specify the other units that are required for this test.
  needs: ['serializer:teacher-time-table-data']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
