
function CadastrarPessoas(nome,sobrenome,email,altura,sexo){
  let tabela = document.querySelector('#tbPessoas');
  let qtdLinhas = tabela.rows.length;
  let linha = tabela.insertRow(qtdLinhas);
  
  let colunaCodigo = linha.insertCell(0);
  let colunaNome = linha.insertCell(1);
  let colunaSobrenome = linha.insertCell(2);
  let colunaEmail = linha.insertCell(3);
  let colunaAltura = linha.insertCell(4);
  let colunaSexo = linha.insertCell(5);

  colunaCodigo.innerHTML = qtdLinhas; //Recebe o número da Linha
  colunaNome.innerHTML=nome;
  colunaSobrenome.innerHTML=sobrenome;
  colunaEmail.innerHTML = email;
  colunaAltura.innerHTML = altura;
  colunaSexo.innerHTML = sexo;

}