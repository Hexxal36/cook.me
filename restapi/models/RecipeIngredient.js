const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;

const recipeIngredientSchema = new Schema({

    amount: {
        type: Number,
        required: true,
    },

    amountType: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    recipe: {
        type: ObjectId,
        ref: "Recipe"
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('RecipeIngredient', recipeIngredientSchema);