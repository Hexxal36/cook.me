const models = require('../models');

module.exports = {
    get: (req, res, next) => {
      const length = req.query.length ? parseInt(req.query.length) : 20
        models.Category.find().sort('-created_at').limit(length).populate('author')
            .then((categories) => res.send(categories))
            .catch(next);
    },

    post: (req, res, next) => {
        const { name } = req.body;
        const { _id } = req.user;

        models.Category.create({ name, author: _id })
            .then((createdCategory) => {
                return Promise.all([
                    models.Category.findOne({ _id: createdCategory._id })
                ]);
            })
            .then(([modifiedObj, CategoryObj]) => {
                res.send(CategoryObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Category.updateOne({ _id: id }, { description })
            .then((updatedCategory) => res.send(updatedCategory))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Category.deleteOne({ _id: id })
            .then((removedCategory) => res.send(removedCategory))
            .catch(next)
    }
};