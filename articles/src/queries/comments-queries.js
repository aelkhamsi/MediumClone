
module.exports = {
    QUERY_GET_ALL: `SELECT comments.id, comments.userId, comments.articleId, comments.comment, users.username
    FROM comments 
    JOIN users ON comments.userId = users.id;`,
    QUERY_GET_BY_ID: `SELECT comments.userId, comments.articleId, comments.comment, users.username
    FROM comments 
    JOIN users ON comments.userId = users.id
    WHERE comments.id = ?;`,
    QUERY_GET_BY_ARTICLE_ID: `SELECT comments.userId, comments.articleId, comments.comment, users.username
    FROM comments 
    JOIN users ON comments.userId = users.id 
    WHERE articleId = ?;`,
}