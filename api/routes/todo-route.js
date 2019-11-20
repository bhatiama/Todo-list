module.exports = function (app) {
    const todoController = require('../controllers/todo-controller');
    // Routes for search and create new Todo List.
    app.route('/todo')
        .get(todoController.list)
        .post(todoController.post);

    // Routes for get, update and delete Todo List based on Id.
    app.route('/todo/:todoId')
        .get(todoController.get)
        .put(todoController.put)
        .delete(todoController.delete);

};
