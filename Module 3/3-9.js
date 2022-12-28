let user1 = { name: "Alex" };
let user2 = { name: "John" };

let article1 = { name: "React" };
let article2 = { name: "Angulat" };
let article3 = { name: "Vue" };

let userArticles = new Map();

userArticles.set(user1, [article1, article2]);
userArticles.set(user2, [article3]);

console.log(userArticles);

function onlyUnique(array) {
  let setFromArray = new Set(array);
  return Array.from(setFromArray);
}

let notUniqueArray = [1, 2, 3, 3, 1, 2, 3, 5, 5, 3, 2, 6, 6, 7, 5];
let uniqueArray = onlyUnique(notUniqueArray);
console.log(uniqueArray);
