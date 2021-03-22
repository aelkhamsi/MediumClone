
class Article {
    constructor(userId, name, content, draft) {
        this.userId = userId;
        this.name = name;
        this.reference = null;
        this.content = content;
        if (draft) this.draft = draft;
        else this.draft = false;

        let ts = Date.now();
        let date = new Date(ts);
        this.createdAt = date;
        this.updatedAt = date;
    }
}

module.exports = { Article };