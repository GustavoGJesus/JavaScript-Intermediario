//ACESSANDO ELEMENTOS HTML 
// document.getElementById("id do elemento que eu quero")=> Pegando o elemento pelo ID
//Exemplo

/*
let p1 = document.getElementById("p1"); //p1 seria o ID que foi declarado no HTML
console.log(p1) //irá imprimir o elemento com o ID "p1"

//Pegando elementos por meio de class
let paragrafos = document.getElementsByClassName("paragrafos"); //paragrafos seria a class que foi declarado no HTML
console.log(paragrafos) // irá imprimir um array com os elementos que possuem essa class 
for(let p of paragrafos){console.log(p)} //irá imprimir os paragrafos

//Pegando todos os elementos
let todosOsParagrafos = document.getElementsByTagName("p") 
console.log(todosOsParagrafos) 
*/

//MODIFICANDO ELEMENTOS HTML
/*
let p = document.getElementById("p1")
p.innerHTML = "Modificando o paragrafo com o id p1" //recebe um HTML, ou seja <h3>Texto</h3>,modifica o elemento no html 
p.innerText = "Modificando o paragrafo também " //Mostra o que está acontecendo na tela
p.textContent = "Modificando o paragrafo mais uma vez" // Mostra o que está acontecendo no HTML

//MODIFICANDO STYLE atributo.style = "color: blue"
p.style = "color: blue"
p.style.backgroundColor = "red"

//Criando ou modificando novo atributo
p.setAttribute("nome do atributo atual", "nome do novo atributo")
*/

