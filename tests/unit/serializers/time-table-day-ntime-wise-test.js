import { moduleForModel, test } from 'ember-qunit';

moduleForModel('time-table-day-ntime-wise', 'Unit | Serializer | time table day ntime wise', {
  // Specify the other units that are required for this test.
  needs: ['serializer:time-table-day-ntime-wise']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
