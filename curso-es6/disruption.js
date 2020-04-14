const user = {
  name: "Hugo",
  age: '25',
  address: {
    city: 'Samambaia',
    state: 'DF'
  }
}

//Get data by old way
/*     const name = user.name
    const age = user.age
    const city = user.address.city

    console.log(name)
    console.log(age)
    console.log(city) */

//Get data by new way(ES6+ === disruption)

const { name, age, address:{ city }} = user;

console.log(name);
console.log(age);
console.log(city);

//Example of disruption on functions

function showName({ name, age  }){
  console.log(name, age)
}

showName(user) + console.log("This is showName function")