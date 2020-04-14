// *** *** REST *** *** 
//UTILIZING REST DEFINE A VARIABLE THAT GET THE FIRST POSITION OF ARRAY 
//AND ANOTHER VARIABLE THAT TAKE THE REST O THE ARRAY
const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr

console.log(x)
console.log(y)

//CREATE A FUNCTION THAT RECEIVES MANY PARAMS AND SUM ALL OF THEM

function sum(...params){
  return console.log(params.reduce((total, next) => total + next))
}
sum(20,30,40)

// *** *** SPREAD *** ***
//FOR THAT OBJECT...

const user = {
  name: 'Diego',
  age: 23,
  address: {
  city: 'Rio do Sul',
  state: 'SC',
  country: 'Brasil',
  }
 };

//CREATE A VARIABLE THAT CONTAINS ALL DATA USERS BUT WITH THE NAME GABRIEL

const user1 = {...user, name: "Gabriel"}
console.log(user1);


//CREATE A VARIABLE THAT CONTAINS ALL DATA USERS BUT WITH CITY LONTRAS
const user2 = {...user, address: {city: "Lontras"}}
console.log(user2);
