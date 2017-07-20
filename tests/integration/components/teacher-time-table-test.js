import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('teacher-time-table', 'Integration | Component | teacher time table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{teacher-time-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#teacher-time-table}}
      template block text
    {{/teacher-time-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
