const arr = [1,2,4,5]

const arrMap = arr.map(function(item){
  return item * 2;
})

console.log(arrMap);

//simplificando com array function

const arrMap2 = arr.map(item => item * 2);
console.log(arrMap2);