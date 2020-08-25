class Usuario {
  constructor(email,senha) {
    this.email = email;
    this.senha = senha;
  }
  isAdmin(){
    return this.admin === true
  }  


}
class Admin extends Usuario {
  constructor(email,senha) {
    super(email,senha)    
    this.admin = true;
  }
}

const User1 = new Usuario('email@usuario.com', 'senha123');
const Adm1 = new Admin('email@admin.com', 'senha1234');

console.log(User1.email)
console.log(User1.senha)
console.log(User1.isAdmin())

console.log(Adm1.email) 
console.log(Adm1.senha) 
console.log(Adm1.isAdmin())

