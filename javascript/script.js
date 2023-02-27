function aparacerDescricao(app){
    if(app == 'calculadora'){
        document.querySelector("#calc").style.transition = "2s"
        document.querySelector("#calc").style.boxShadow = "2px 2px 2px"
        document.querySelector("#calc").style.backgroundColor = "#f8f8ff"
        document.querySelector("#informacoesCalc").innerHTML = "Calculadora personalizada com animações nas esferas. Dois botões um muda para modo Dark e o outro para mudar de calculadora. <br> Tecnologias usadas: HTML, CSS e Javascript."
    }else if(app == 'finans'){
        document.querySelector("#finans").style.transition = "2s"
        document.querySelector("#finans").style.boxShadow = "2px 2px 2px"
        document.querySelector("#finans").style.backgroundColor = "#f8f8ff"
        document.querySelector("#informacoesFinans").innerHTML = "Site Finans simples com o objetivo de estudos para parte de front end com alguns botões, input e responsivo. <br/> Tecnologias usadas: HTML, CSS e Bootstrap."
    }else if(app == 'urna'){
        document.querySelector("#urna").style.transition = "2s"
        document.querySelector("#urna").style.boxShadow = "2px 2px 2px"
        document.querySelector("#urna").style.backgroundColor = "#f8f8ff"
        document.querySelector("#informacoesUrna").innerHTML = "Simulador de urna eletrônica com botões para digitar os números dos candidato e confirma, números dos canditados encontra-se no botão código. <br> Tecnologias usadas: HTML, CSS e Javascript."
    }
}

