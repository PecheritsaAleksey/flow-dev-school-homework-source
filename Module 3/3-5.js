let articles = ["Javascript", "Technologes", "React"];

articles.push("Angular");
console.log(articles);

let firstArticle = articles.shift();
console.log(firstArticle);
console.log(articles);

let indexOfReact = articles.indexOf("React");
console.log("React is article number - ", indexOfReact + 1);
