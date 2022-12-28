function User(name) {
  this.name = name;
}

function Article(name, text) {
  this.name = name;
  this.text = text;
}

let user = new User("Alex");

let article1 = new Article("React", "React is a awesome library");
let article2 = new Article("Angular", "React is a also nice library");

user.articles = [article1, article2];

console.log(user);
