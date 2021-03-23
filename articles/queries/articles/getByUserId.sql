SELECT articles.id, articles.name, articles.content, articles.createdAt, articles.updatedAt, users.username 
FROM articles 
JOIN users 
ON articles.userId = users.id
WHERE users.id = ?;