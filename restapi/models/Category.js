const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const categorySchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: "User",
        required:true
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Category', categorySchema);