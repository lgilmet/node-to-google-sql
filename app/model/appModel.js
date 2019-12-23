"user strict";

let sql = require("../../db");

let Todo = function(todo) {
  this.title = todo.title;
  this.status = todo.status;
  this.created_at = new Date();
};

Todo.createTodo = function(newTodo, result) {
  sql.query("insert into todos set ?", newTodo, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Todo.getTodoById = function(todoId, result) {
  sql.query("select * from todos where id = ?", todoId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Todo.getAllTodos = function(result) {
  sql.query("Select * from todos", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Todo.updateById = function(id, todo, result) {
  sql.query(
    "update todos set title = ? where id = ?",
    [todo.title, id],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Todo.delteById = function(id, result) {
  sql.query("delete from todos where id = ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Todo;
