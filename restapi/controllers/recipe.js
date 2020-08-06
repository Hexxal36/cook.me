const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const id = req.query.id

        if (id) {
            models.Recipe.findOne({ _id: id })
                .then((recipe) => res.send(recipe))
                .catch(next)
            return
        }

        const length = req.query.length ? parseInt(req.query.length) : 20
            models.Recipe.find().sort('-created_at').limit(length).populate('author')
                .then((recipes) => res.send(recipes))
                .catch(next);
    },

    post: (req, res, next) => {
        const { title, time, description, ingredients } = req.body;
        const { _id } = req.user;

        models.Recipe.create({ title, time, description, author: _id })
            .then((createdrecipe) => {
                const recipeId = createdrecipe._id
                for (const ingredient of ingredients) {
                    const amount = ingredient.amount
                    const amountType = ingredient.amountType
                    const type = ingredient.type
        
                    models.RecipeIngredient.create({amount, amountType, type})
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
        const { title, time, description } = req.body;
        models.Recipe.updateOne({ _id: id }, { title, time, description })
            .then((updatedrecipe) => res.send(updatedrecipe))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Recipe.deleteOne({ _id: id })
            .then((removedrecipe) => res.send(removedrecipe))
            .catch(next)
    }
};