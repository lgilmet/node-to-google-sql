"use strict";
module.exports = function(app) {
  let todoList = require("../controller/appController");

  app
    .route("/todos")
    .get(todoList.list_todos)
    .post(todoList.create_todo);

  app
    .route("/todos/:todoId")
    .get(todoList.read_todo)
    .put(todoList.update_todo)
    .delete(todoList.delete_todo);
};
