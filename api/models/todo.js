const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create schema for todo list objects
*/

let todoSchema = new Schema({
    //Title of the todo item
    title: {
        type: String,
        required: "title is required"
    },

    //List description
    description: String,

    //List due date
    duedate: Date,

    //status
    completed: Boolean
});

// Duplicate the id field as mongoose returns _id field instead of id.
todoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialized.
todoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todo', todoSchema);
