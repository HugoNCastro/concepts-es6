class User{
  constructor(email, senha){
  this.email= email;
  this.senha = senha;
  }
  isAdmin(){
    return false;
  }
}

class Admin extends User{
  constructor(){
    super();
    this.admin = true
  }
  isAdmin(){
    return this.admin;
  } 
}

const user1 = new User('hugonaaman@gmail.com', 203040) 
const admin1 = new Admin('daniellemendonca@gmail.com', 304050)


console.log(user1);
console.log(admin1);

console.log(user1.isAdmin());
console.log(admin1.isAdmin());
