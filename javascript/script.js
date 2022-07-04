$(document).ready(() => {
    $('#informacoesFinans').hide();
    $('#informacoesUrna').hide();
});

$(document).ready(() => {
    $('#finans').mouseenter(() => {
        $('#informacoesFinans').fadeIn(1000).html('Simulador site Finans. <br/> Tecnologias usadas: HTML, CSS e Bootstrap.');
    });
});

$(document).ready(() => {
    $('#urna').mouseenter(() => {
        $('#informacoesUrna').fadeIn(1000).html('Simulador de urna eletrônica. <br> Tecnologias usadas: HTML, CSS e Javascript.');
    });
});