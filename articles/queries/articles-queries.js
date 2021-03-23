

module.exports = {
    QUERY_ADD_ARTICLE: `INSERT INTO articles SET ?;`,
    QUERY_GET_ALL: `SELECT articles.id, articles.name, articles.content, articles.createdAt, articles.updatedAt, users.username 
    FROM articles 
    JOIN users 
    ON articles.userId = users.id;`,
    QUERY_GET_BY_ID: `SELECT articles.id, articles.name, articles.content, articles.createdAt, articles.updatedAt, users.username 
    FROM articles 
    JOIN users 
    ON articles.userId = users.id
    WHERE articles.id = ?;`,
    QUERY_GET_BY_USER_ID: `SELECT articles.id, articles.name, articles.content, articles.createdAt, articles.updatedAt, users.username 
    FROM articles 
    JOIN users 
    ON articles.userId = users.id
    WHERE users.id = ?;`,
    QUERY_DELETE_ARTICLE: `DELETE FROM articles WHERE id = ?;`,
}