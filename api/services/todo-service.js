const mongoose = require('mongoose'),
    Todo = mongoose.model('todo');

/**
 * Returns an array of todo list object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Todo.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new todo list object.
 *
 * @param {Object} todo {Todo list object}
 */
module.exports.save = function (todo) {
    const todoNew = new Todo(todo);
    const promise = todoNew.save();
    return promise;
};

/**
 * Returns the todo list object matching the id.
 *
 * @param {string} todoId {Id of the todo list object}
 */
module.exports.get = function (todoId) {
    const promise = Todo.findById(todoId).exec();
    return promise
};


/**
 * Updates and returns the todo list object.
 *
 * @param {Object} todo {todo list object}
 */
module.exports.update = function (todo) {
    todo.modified_date = new Date();
    const promise = Todo.findOneAndUpdate({_id: todo._id}, todo).exec();
    return promise;
};

/**
 * Deletes the todo list object matching the id.
 *
 * @param {string} todoId {Id of the todo list object}
 */
module.exports.delete = function (todoId) {
    const promise = Todo.remove({_id: todoId});
    return promise;
};
