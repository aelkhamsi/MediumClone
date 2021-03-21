

class Article {

    constructor(id, name, content, draft) { // TODO: id is temporary
        this.id = id;   
        this.name = name;
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