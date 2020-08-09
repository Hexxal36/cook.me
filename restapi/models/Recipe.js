const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const recipeSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    time: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    ingredients: [
        {
            type: ObjectId, ref:"RecipeIngredient"
        }
    ],

    comments: [
        {
            type: ObjectId,
            ref: "Comment",
        }
    ],

    creator: {
        type: ObjectId,
        ref: "User",
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Recipe', recipeSchema);