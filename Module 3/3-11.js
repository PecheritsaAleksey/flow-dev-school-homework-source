let user = {
  name: "Alex",
  age: 27,
  articles: [{ name: "React" }, { name: "JavaScript" }, { name: "New cource" }],
};

for (const key in user) {
  console.log(key);
}

const logUserArticles = (user) => {
  let userArticles = user.articles;
  for (let i = 0; i < userArticles.length; i++) {
    const article = userArticles[i];
    console.log(`Article ${i + 1} name is ${article.name}`);
  }
};

logUserArticles(user);
