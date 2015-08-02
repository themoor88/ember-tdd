import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-tdd/tests/helpers/start-app';

var application;

module('Acceptance | assignment', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('unassigned items are grouped together', function(assert) {
  visit('/');
  andThen(function() {
    var unassigned = find(".unassigned .cards");
    assert.equal(unassigned.length, 3);
    var project = find(".unassigned .cards:eq(0) .todo_project");
    assert.equal(project.text(), "first");
  });
});

test('assigned items are grouped together', function(assert) {
  visit('/');
  andThen(function() {
    var assigned = find(".assigned .cards");
    assert.equal(assigned.length, 1);
    var project = find(".assigned .cards:eq(0) .todo_project");
    assert.equal(project.text(), "last");
  });
});

test('status is shown in plain english', function(assert) {
  visit('/');
  andThen(function() {
    var status = find(".assigned .cards:eq(0) .todo_status");
    assert.equal(status.text(), "Assigned");
  });
});

test("clicking the assign button will move item from unassigned to assigned", function(assert) {
  visit('/');
  andThen(function() {
    var assigned = find(".assigned .cards");
    assert.equal(assigned.length, 1);
    var unassigned = find(".unassigned .cards");
    assert.equal(unassigned.length, 3);
  });
  click(".unassigned .cards:eq(0) .assign_btn");
    andThen(function() {
    var assigned = find(".assigned .cards");
    assert.equal(assigned.length, 2);
    var unassigned = find(".unassigned .cards");
    assert.equal(unassigned.length, 2);
  });
});

// test("clicking toggle link will show details for given item", function(assert) {
//   visit('/');
//   andThen(function() {
//     var details = find(".details_section");
//     assert.ok(details.is(":hidden"));
//   });
//   click(".unassigned .cards:eq(0) .toggle_link");
//   andThen(function() {
//     assert.equal(currentURL(), "/todo/1");
//     var details = find(".details_section");
//     assert.ok(!(details.is(":hidden")));
//     var projectInput = find(".details_section input.project");
//     assert.equal(projectInput.val(), "first");
//   });
// });
