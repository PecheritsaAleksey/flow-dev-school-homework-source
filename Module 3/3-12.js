let user = {
  name: "Alex",
  age: 27,
  articles: [{ name: "React" }, { name: "JavaScript" }, { name: "New cource" }],
};

const getArticleCount = (user) => {
  let articleCount = user.articles.length;

  switch (true) {
    case articleCount < 2:
      console.log("You need more!");
      break;
    case articleCount < 4:
      console.log("Good start!");
      break;
    default:
      console.log("Keep going!");
      break;
  }

  switch (articleCount) {
    case 0:
    case 1:
      console.log("You need more!");
      break;
    case 2:
    case 3:
      console.log("Good start!");
      break;
    default:
      console.log("Keep going!");
      break;
  }
};

getArticleCount(user);
