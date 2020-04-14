const company = {
  name: 'Rocketseat',
  address: {
  city: 'Rio do Sul',
  state: 'SC',
  }
 };
 

 const { name, address:{ city, state }} = company;

 console.log(name)
 console.log(city)
 console.log(state)



 let user = {
   name: '',
   age: 0
 }


 function mostraInfo({name, age}) {

  return `${name} tem ${age} anos.`;
 }
 console.log(mostraInfo({ name: 'Diego', age: 23 }))
 