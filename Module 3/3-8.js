function User(name) {
  this.name = name;
}

function Article(name, text) {
  this.name = name;
  this.text = text;
}

let user = new User("Alex");

Object.defineProperty(user, "id", {
  value: 1,
  writable: false,
  configurable: false,
});

user.getInfo = function () {
  return `User ${this.name} has ${this.articles.length} articles`;
};

let article1 = new Article("React", "React is a awesome library");
let article2 = new Article("Angular", "React is a also nice library");

user.articles = [article1, article2];

console.log(user.getInfo());
