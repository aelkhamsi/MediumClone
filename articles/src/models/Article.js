
class Article {
    constructor(userId, name, content) {
        this.userId = userId;
        this.name = name;
        this.content = content;

        let ts = Date.now();
        let date = new Date(ts);
        this.createdAt = date;
        this.updatedAt = date;
    }
}

module.exports = Article;