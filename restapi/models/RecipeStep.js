const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const recipeStepSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('RecipeStep', recipeStepSchema);