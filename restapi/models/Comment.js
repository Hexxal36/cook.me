const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const commentSchema = new Schema({

    body: {
        type: String,
        required: true,
    },

    recipe: {
        type: ObjectId,
        ref: "Recipe"
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Comment', commentSchema);