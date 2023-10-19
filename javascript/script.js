function aparacerDescricao(app){
    if(app == 'calculadora'){
        document.querySelector("#calc").style.transition = "2s"
        document.querySelector("#calc").style.boxShadow = "2px 2px 2px"
        document.querySelector("#calc").style.backgroundColor = "#f8f8ff"
        document.querySelector("#calc").style.height = "31em"
        document.querySelector("#informacoesCalc").innerHTML = "Calculadora personalizada com animações nas esferas. Dois botões um muda para modo Dark e o outro para mudar de calculadora. <br> Tecnologias usadas: HTML, CSS e JavaScript."
    }else if(app == 'finans'){
        document.querySelector("#finans").style.transition = "2s"
        document.querySelector("#finans").style.boxShadow = "2px 2px 2px"
        document.querySelector("#finans").style.backgroundColor = "#f8f8ff"
        document.querySelector("#finans").style.height = "31em"
        document.querySelector("#informacoesFinans").innerHTML = "Site Finans simples com o objetivo de estudos para parte de front end com alguns botões, input e responsivo. <br/> Tecnologias usadas: HTML, CSS e Bootstrap."
    }else if(app == 'urna'){
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
        document.querySelector("#informacoesFood").innerHTML = "E-commerce de hamburguers, refrigerantes e sobremesas, responsivo para celulares, no momento estou trabalhando nesse projeto ele náo está finalizado. <br> Tecnologias usadas: HTML, CSS, JavaScript e React."
    }
}



