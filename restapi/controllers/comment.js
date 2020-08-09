const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const id = req.query.recipe
        models.Comment.find({ recipe : id})
            .then(comments => {
                res.send(comments)
            })
    },

    post: (req, res, next) => {
        const { recipe, body } = req.body

        console.log(req.body)

        models.Comment.create({ recipe, body })
            .then((createdComment) => {
                return Promise.all([
                    models.Comment.findOne({ _id: createdComment._id })
                ]);
            })
            .then(([CommentObj]) => {
                res.send(CommentObj);
            })
            .catch(next);
    },

    delete: (req, res, next) => {

    }
}