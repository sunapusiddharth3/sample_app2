import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contact-detail', 'Unit | Serializer | contact detail', {
  // Specify the other units that are required for this test.
  needs: ['serializer:contact-detail']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
