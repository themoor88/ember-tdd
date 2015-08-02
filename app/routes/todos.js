import Ember from "ember";
import Todo from "ember-tdd/models/todo";

export default Ember.Route.extend({
  model: function() {
    var first = Todo.create({id: 1, status_code: 1, project: "first"});
    var second = Todo.create({id: 2, status_code: 1, project: "second"});
    var third = Todo.create({id: 3, status_code: 1, project: "third"});
    var last = Todo.create({id: 4, status_code: 2, project: "last"});
    return [first, second, third, last];
  }
});