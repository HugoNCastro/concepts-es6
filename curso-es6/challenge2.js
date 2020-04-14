const users = [
  {name: "Hugo", age: 25, company: "Stefanini"},
  {name: "Gabriel", age: 23,company: "NuBank"},
  {name: "João", age: 20 ,company: "Alura"},
  {name: "Guilherme", age: 33, company: "Alura"},
]

//ALL USERS BY AGE => USING MAP

const arr1 = users.map(item => item.age);
console.log(arr1);

//ALL USERS WHO WORK AT ALURA AND ARE OVER 19 => USING FILTER

const arr2 = users.filter(item => item.company === "Alura");
console.log(arr2);

//CREATE VARIABLE THAT SEARCH USERS WHO WORK AT GOOGLE => USING FIND

const arr3 = users.find(item => item.company === "Google")
console.log(arr3);



//MULTIPLY ALL USERS AGE BY 2 AND FILTER WHO ARE OVER 50 => 

let arrMap = users
              .map(item => item.age * 2)
              .filter(age => age <= 50);

console.log(arrMap)