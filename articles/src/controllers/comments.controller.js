const fs = require('fs');
const path = require('path');
const Comment = require('../models/Comment');
const commentRepository = require('../repositories/CommentRepository');

exports.getAll = (req, res) => {
    commentRepository.getAll()
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => {
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time"})
        })
}

exports.getById = (req, res) => {
    commentRepository.getById(req.params.id)
        .then((result) => {
            if (result.length == 0)
                res 
                    .status(404)
                    .json({errorMessage: "Not Found"})
            else
                res
                    .status(200)
                    .json(result[0])
        })
        .catch((err) => {
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time"})
        })
}

exports.getByArticleId = (req, res) => {
    commentRepository.getByArticleId(req.params.id)
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => {
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time"})
        })
}

exports.addComment = (req, res) => {
    let comment = new Comment(req.body.userId, req.body.articleId, req.body.comment);

    if (comment.userId && comment.articleId && comment.comment) {
        commentRepository.add(comment)
            .then((result) => {
                res
                    .status(200)
                    .json({
                        message: "Comment added"
                    })
            })
            .catch((err) => {
                res
                    .status(500)
                    .json({errorMessage: "Internal server error. Please try another time"})
            })
    } else {
        res
            .status(400)
            .json({errorMessage: "Missing fields"})
    }
}