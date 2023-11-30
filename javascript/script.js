function aparacerDescricao(app){
     if(app == 'urna'){
        document.querySelector("#urna").style.transition = "2s"
        document.querySelector("#urna").style.boxShadow = "2px 2px 2px"
        document.querySelector("#urna").style.backgroundColor = "#f8f8ff"
        document.querySelector("#urna").style.height = "31em"
        document.querySelector("#informacoesUrna").innerHTML = "Simulador de urna eletrônica com botões para digitar os números dos candidato e confirma, números dos canditados encontra-se no botão código. <br> Tecnologias usadas: HTML, CSS e JavaScript."
    }else if(app == 'food'){
        document.querySelector("#food").style.transition = "2s"     
        document.querySelector("#food").style.boxShadow = "2px 2px 2px"
        document.querySelector("#food").style.backgroundColor = "#f8f8ff"
        document.querySelector("#food").style.height = "31em"
        document.querySelector("#informacoesFood").innerHTML = "E-commerce de hamburguers, responsivo. Utilizamos componentes, useState, useEffect, Rotas, manipulação do DOM, funções, estruturas de condições e localstorage. <br> Tecnologias usadas: HTML, CSS, JavaScript e React."
    }
}



