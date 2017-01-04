import { moduleForModel, test } from 'ember-qunit';

moduleForModel('section-wise-time-table', 'Unit | Serializer | section wise time table', {
  // Specify the other units that are required for this test.
  needs: ['serializer:section-wise-time-table']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
