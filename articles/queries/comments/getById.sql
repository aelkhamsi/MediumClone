SELECT comments.userId, comments.articleId, comments.comment, users.username
FROM comments 
JOIN users ON comments.userId = users.id
WHERE comments.id = ?;