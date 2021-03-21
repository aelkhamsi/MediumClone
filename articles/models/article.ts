export class Article {
    id: number;
    name: string;
    reference: string;
    content: string;
    draft: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, content: string, draft?: boolean) { // TODO: id is temporary
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