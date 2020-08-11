const models = require('../models');
const { model } = require('mongoose');
const { query } = require('express');

module.exports = {
    get: (req, res, next) => {
        const id = req.query.id
        const username = req.query.username
        const query = req.query.q
        
        if (id) {
            models.Recipe.findOne({ _id: id })
                .then(recipe => {
                    const ingredientIds = recipe.ingredients
                    return models.RecipeIngredient.find().where('_id').in(ingredientIds)
                        .then(ing => {
                            recipe.ingredients =ing
                            return recipe
                        })
                })
                .then(recipe => res.send(recipe))
                .catch(next)
            return
        }

        const length = 3

        if (username) {
            models.User.findOne({username})
                .then(user => {
                    const creator = user._id
                    models.Recipe.find({creator}).sort('-created_at').limit(length)
                    .then((recipes) => {
                        res.send(recipes)
                    })
                    .catch(next);
                    return
                })
        } else if(query) {
            models.Recipe.find({title: { $regex: '.*' + query + '.*' } }).sort('-created_at').limit(length)
            .then((recipes) => {
                res.send(recipes)})
            .catch(next);
        }
        else {
            models.Recipe.find().sort('-created_at').limit(length)
                .then((recipes) => {
                    res.send(recipes)})
                .catch(next);
        }
        
    },

    post: (req, res, next) => {
        const { title, time, description, imageLink, ingredients } = req.body;
        const { _id } = req.user;

        models.Recipe.create({ title, time, description, imageLink, creator: _id })
            .then((createdrecipe) => {
                const recipeId = createdrecipe._id
                for (const ingredient of ingredients) {
                    const amount = ingredient.amount
                    const amountType = ingredient.amountType
                    const type = ingredient.type
        
                    models.RecipeIngredient.create({amount, amountType, type, recipe: recipeId})
                        .then((createdIngredient) => {
                            return Promise.all([
                                models.Recipe.updateOne({ _id: recipeId }, { $push: { ingredients: createdIngredient } })
                            ])
                    })
                }

                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdrecipe } }),
                    models.Recipe.findOne({ _id: createdrecipe._id })
                ]);
            })
            .then(([modifiedObj, recipeObj]) => {
                res.send(recipeObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { title, time, description, imageLink, ingredients } = req.body;
        const { _id } = req.user;

        
        models.Recipe.findOne({ _id: id})
            .then(recipe => {
                if (recipe.creator.toString() === _id.toString()) return recipe
                throw 'User is not creator'
            })
            .then(recipe => {
                models.RecipeIngredient.deleteMany({ _id: {$in: recipe.ingredients}}, (err) => {})
            })
            .then(() => {
                models.Recipe.updateOne({ _id: id }, { title, time, description, imageLink })
                    .then(updatedrecipe => {
                        for (const ingredient of ingredients) {
                            const amount = ingredient.amount
                            const amountType = ingredient.amountType
                            const type = ingredient.type
                
                            models.RecipeIngredient.create({amount, amountType, type, recipe: id})
                                .then((createdIngredient) => {
                                    return Promise.all([
                                        models.Recipe.updateOne({ _id: id }, { $push: { ingredients: createdIngredient } })
                                    ])
                            })
                        }
                    })
                    .then((updatedrecipe) => res.send(updatedrecipe))
                    .catch(next)
            })
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        const { _id } = req.user;

        models.Recipe.findOne({ _id: id})
        .then(recipe => {
            if (recipe.creator === _id) return recipe
            throw 'User is not creator'
        })
        .then(recipe => {
            models.RecipeIngredient.deleteMany({ _id: {$in: recipe.ingredients}}, (err) => {})
            models.Comment.deleteMany({ _id: {$in: recipe.comments}}, (err) => {})
        })
        models.Recipe.deleteOne({ _id: id })
            .then((removedrecipe) => res.send(removedrecipe))
            .catch(next)
    }
};