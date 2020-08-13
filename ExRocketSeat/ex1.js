var endereco = {
  rua: "Rua dos Pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "Araraquara",
  uf: "SP"
}

console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com o número ${endereco.numero}.`)


// ----------
// Exe2

function exibirParesEntre(n1,n2){
  for(let i = n1; i<=n2;i++){
    if(i%2===0){
      console.log(i);
    }
  }
}
exibirParesEntre(2,32);

// ----------
// Exe3

function temHabilidade(hab) {
 if(skills.indexOf(hab) != -1){
   console.log(true);
 }else{
   console.log(false);
 }

}
var skills = ["Javascript", "ReactJS", "React Native"];

temHabilidade('ReactJS')

// ==========================
// Ex4

function experiencia(anos) {
  if(anos == 0 && anos <= 1){
    console.log('iniciante')
  }else if(anos > 1 && anos <=3){
    console.log('intermediário')
  }else if(anos > 3 && anos <=6){
    console.log('avançado')
  }else{
    console.log('JEDI')
  }
}
var anosDeEstudo = 7;
experiencia(anosDeEstudo);

// ==================
// Ex5
var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

 for(user of usuarios) {
  var {nome, habilidades} = user
   console.log(`O ${nome} possui as habilidades: ${habilidades.join(', ')}`)
 }
 