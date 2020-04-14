const name = "Hugo"
const age = 25

//OLD WAY
const user1 ={
  name: name,
  age: age,
  job: "Software Engineer"
}


//OBJECT SHORT SYNTAX
const user2 = {
  name,
  age,
  job: "Dev"
}

console.log(user1);
console.log(user2);