const mongoose = require("mongoose");

// mongodb+srv://pragnyaswain08:SR2nZUyiSpmKOXAS@react-todo.vh3oc.mongodb.net/?retryWrites=true&w=majority&appName=React-todo

mongoose.connect(
  "mongodb+srv://pragnyaswain08:SR2nZUyiSpmKOXAS@react-todo.vh3oc.mongodb.net/?retryWrites=true&w=majority&appName=React-todo"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
