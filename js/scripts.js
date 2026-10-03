// let idade = prompt("Informe sua idade: ");
// if(idade < 18){
//     alert("Não pode entrar otário")
//      }else{
//     alert("Pode entrar parceiro")
//      }

function proc(){
    console.log("Ta processando parceiro");
    let n = document.getElementById("nome").value;
    console.log(n);
     
    // saida de dados
    let res = document.getElementById("resultados");
    res.innerHTML += "<li>Seja bem-vindo " + n + "</li>"

}
