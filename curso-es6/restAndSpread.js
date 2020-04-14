//REST in Objects

const user = {
  name: "Hugo",
  age: 25,
  city: "Samambaia"
}

const { name, ...rest } = user

console.log(name)
console.log(rest)

//REST in Functions

function sum(...rest){
  return rest.reduce((total, next) => total + next);
}
console.log(sum(1,3,4))


//REST in Arrays 

const arr = [1, 2, 3, 4]
const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)


//SPREAD in Arrays

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)


//SPREAD in Objects *POWERFUL*

const user2 = {...user, name: "Danielle", age: 23}
console.log(user2);