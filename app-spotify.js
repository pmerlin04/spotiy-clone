var burguer = document.querySelector('.burguer');
var links = document.querySelector ('.cabecalho-menu');
var burguer1 = document.querySelector('.burguer div:nth-child(1)');
var burguer3 = document.querySelector('.burguer div:nth-child(3)');
var burguer2 = document.querySelector('.burguer div:nth-child(2)');

burguer.addEventListener('click', () =>{
    links.classList.toggle('exibir');
    burguer1.classList.toggle('close1');
    burguer3.classList.toggle('close3');
    burguer2.classList.toggle('close2');
})