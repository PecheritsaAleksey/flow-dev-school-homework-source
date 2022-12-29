function userCreateBuilder(name, age) {
  const nameDefault = "mister";
  const ageDefault = "99";

  if (!name) name = nameDefault;
  if (!age) age = ageDefault;

  function createUser() {
    return { name: name, age: age };
  }

  return createUser;
}

let userCreator1 = userCreateBuilder("Bob", 27);
let userCreator2 = userCreateBuilder("Alex");
let userCreator3 = userCreateBuilder();

console.log(userCreator1());
console.log(userCreator2());
console.log(userCreator3());
