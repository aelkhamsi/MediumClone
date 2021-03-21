
let articles = [
    {
        id: 1,
        title: "Article 1",
        content: "Lorem Ipsum 1"
    },
    {
        id: 2,
        title: "Article 2",
        content: "Lorem Ipsum 2"
    },
    {
        id: 3,
        title: "Article 3",
        content: "Lorem Ipsum 3"
    }
]

exports.getAll = (req, res) => {
    res.send(articles);
};

exports.getById = (req, res) => {
    let result = articles.filter(article => article.id == req.params.id);
    if (result.length == 0) 
        res
            .status(404)
            .json({errorMessage: "Not Found"}) 
    else
        res
            .status(200)
            .send(result);
};

exports.addArticle = (req, res) => {
    let title = req.body.title;
    let content = req.body.content;

    if (title && content) {
        let article = {id: articles.length + 1, title: title, content: content};
        articles.push(article);
        res
            .status(200)
            .json({
                message: "Article Added",
                id: article.id    
            })
    } else {
        res
            .status(400)
            .json({errorMessage: "Missing fields"})
    }
};

exports.updateArticle = (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let content = req.body.content;

    if (id && title && content) {
        let result = articles.filter(article => article.id == id);
        if (result.length == 0) 
            res
                .status(404)
                .json({errorMessage: "Not Found"}) 
        
        articles.map(article => {
            if (article.id == id) 
                article.title = title;
                article.content = content;
        })

        res
            .status(200)
            .json({message: "Article Updated"}) 
    } else {
        res
            .status(400)
            .json({errorMessage: "Missing Fields"});
    }
};

exports.deleteArticle = (req, res) => {
    let id = req.body.id;

    if (id) {
        let result = articles.filter(article => article.id == id);
        if (result.length == 0) 
            res
                .status(404)
                .json({errorMessage: "Not Found"}) 

        articles = articles.filter(article => article.id != id);

        res
            .status(200)
            .json({message: "Article Deleted"}) 
    } else {
        res
            .status(400)
            .json({errorMessage: "Id not provided (Missing fields)"})
        }
};

