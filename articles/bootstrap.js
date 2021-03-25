
let sql = `CREATE TABLE articles(id int AUTO_INCREMENT, userId int, name VARCHAR(255), reference VARCHAR(255), content LONGTEXT, draft BIT, createdAt DATE, updatedAt DATE, PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id)
)`;
db.query(sql, (err, result) => {
  if (err) throw err;
  console.log("Articles Table Created...");
})

let sql = `CREATE TABLE comments(id int AUTO_INCREMENT, userId int, articleId int, comment VARCHAR(255), PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id), FOREIGN KEY(articleId) REFERENCES articles(id)
)`;
db.query(sql, (err, result) => {
   if (err) throw err;
   console.log("Comments Table Created...");
})