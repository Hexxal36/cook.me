const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const recipeSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    minutes: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    steps: [
        { 
            type: ObjectId,
            ref: "RecipeStep" 
        }
    ],

    creator: {
        type: ObjectId,
        ref: "User",
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Recipe', recipeSchema);