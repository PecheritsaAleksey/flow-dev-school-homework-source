let user = {
  name: "Alex",
  age: 27,
  articles: [{ name: "React" }, { name: "JavaScript" }, { name: "New cource" }],
};

const logUserArticles = (user) => {
  let userArticles = user.articles;
  userArticles.forEach((article, i) => {
    console.log(`Article ${i + 1} name is ${article.name}`);
  });
};

logUserArticles(user);

user.articles = user.articles.map((article) => {
  article.text = "Default text";
  return article;
});

console.log(user);

let allArticlesName = user.articles.reduce((prev, current) => {
  return prev + " " + current.name;
}, "");

console.log(allArticlesName);