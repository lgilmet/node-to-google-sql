"use strict";

let Todo = require("../model/appModel");

exports.list_todos = function(req, res) {
  Todo.getAllTodos(function(err, todo) {
    if (err) res.send(err);

    res.send(todo);
  });
};

exports.create_todo = function(req, res) {
  let new_todo = new Todo(req.body);

  if (!new_todo.todo || !new_todo.status) {
    res.status(400).send({
      error: true,
      message: "Please provide task/status"
    });
  } else {
    Todo.createTodo(new_todo, function(err, todo) {
      if (err) res.send(err);
      res.json.todo;
    });
  }
};

exports.read_todo = function(req, res) {
  Todo.getTodoById(req.params.todoId, function(err, todo) {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.update_todo = function(req, res) {
  Todo.updateById(req.params.todoId, new Todo(req.body), function(err, todo) {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.delete_todo = function(req, res) {
  Todo.delteById(req.params.todoId, function(err, todo) {
    if (err) res.send(err);
    res.json({
      message: "Todo successfully deleted"
    });
  });
};

// todoList.list_todose
// todoList.create_todo

// todoList.read_todo
// todoList.update_todo
// todoList.delete_todo
