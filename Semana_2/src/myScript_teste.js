console.log("vai iniciar o código js")


    // Não se preocupe em fazer um formulário, esta página já está funcional 

    const calculate = document.getElementById('submit')

    // Crie a sua lógica a partir deste ponto
    
    // Adicione seu array aqui
console.log("inicia obj_dados e array_tab")
    
const obj_dados = {
      ind_idade:"",
      ind_altura:"",
      ind_peso:"",
      ind_imc:"",
      ind_alerta:""};

const array_tab = [];

console.log("vai mostrar o obj_dados e array_tab dentro do click")
console.table(obj_dados)
console.table(array_tab)

function myFunction(){
    console.log("estou na function");
    console.log("                                 ")
console.log("*********************************")
console.log("*********** inicio **************")
console.log("**************do*****************")
console.log("************click ***************")
console.log("*********************************")
    // Esse document.getElementById, possui a informação dos inputs, capture ele utilizando uma variável
    // Exemplo: let minhaVar = document.getElementById
    // console.log(minhaVar) --> valor do document.getElement
    // MAKE - após fechar janela, limpar os valores e reiniciar os valores

console.log("dentro do click")
console.log("recebendo os dados digitados idade, altura e peso")

let obj_ind_idade = document.getElementById('age').value 
let obj_ind_altura = document.getElementById('height').value
let obj_ind_peso = document.getElementById('weight').value
let obj_ind_imc
let obj_ind_alerta 

console.log("Idade........:",obj_ind_idade)
console.log("Altura........:",obj_ind_altura)
console.log("Peso..........:",obj_ind_peso)

console.log("vai calcular o valor do imc")

obj_ind_altura = obj_ind_altura/100
obj_ind_imc = obj_ind_peso / (obj_ind_altura*obj_ind_altura)
obj_ind_imc = parseFloat(obj_ind_imc.toFixed(1))

console.log("Valor do IMC .........:",obj_ind_imc)

console.log("vai descobrir o alerta do imc")

switch(true){
    case (obj_ind_imc >= 0 && obj_ind_imc <= 16):
      obj_ind_alerta = ' Magreza grave';
      break; 
    case (obj_ind_imc >= 16.1 && obj_ind_imc <= 17):
      obj_ind_alerta = ' Magreza moderada';
      break; 
    case (obj_ind_imc >= 17.1 && obj_ind_imc <= 18.5):
      obj_ind_alerta = ' Magreza leve';
      break; 
    case (obj_ind_imc >= 18.6 && obj_ind_imc <= 25):
      obj_ind_alerta = ' Saudável';
      break; 
    case (obj_ind_imc >= 25.1 && obj_ind_imc <= 30):
      obj_ind_alerta = ' Sobrepeso';
      break; 
    case (obj_ind_imc >= 30.1 && obj_ind_imc <= 35):
      obj_ind_alerta = ' Obesidade Grau I';
      break; 
   case (obj_ind_imc >= 35.1 && obj_ind_imc <= 39.9):
      obj_ind_alerta = ' Obesidade Grau II (considerada severa)';
      break; 
    case (obj_ind_imc >= 40):
      obj_ind_alerta = ' Obesidade Grau III (considerada mórbida)';
      break; 
   
  }

  console.log("Alerta do IMC........:",obj_ind_alerta)


  console.log("dados digitados .... "," idade "+obj_ind_idade," altura "+obj_ind_altura," peso "+obj_ind_peso," IMC "+obj_ind_imc," alerta "+obj_ind_alerta)  
  console.log("repassando os valores para os campos do objeto")


    obj_dados.ind_idade=obj_ind_idade,
    obj_dados.ind_altura=obj_ind_altura,
    obj_dados.ind_peso=obj_ind_peso,
    obj_dados.ind_imc=obj_ind_imc,
    obj_dados.ind_alerta=obj_ind_alerta


    // console.log("vai fazer o push do obj_dados no array_tab")
    // array_tab.push(obj_dados)
    
    
    // console.log("vai mostrar o obj_dados e array_tab dentro do click")
    // console.table(obj_dados)
    // console.table(array_tab)
}


// const button = document.querySelector('input');
// const paragraph = document.querySelector('p');

// button.addEventListener('click', updateButton);

// function updateButton() {
//   if (button.value === 'Start machine') {
//     button.value = 'Stop machine';
//     paragraph.textContent = 'The machine has started!';
//   } else {
//     button.value = 'Start machine';
//     paragraph.textContent = 'The machine is stopped.';
//   }
// }