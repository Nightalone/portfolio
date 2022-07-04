$(document).ready(() => {
    $('#informacoesFinans').hide();
    $('#informacoesUrna').hide();
});
$(document).ready(() => {
    $('#finans').mouseenter(() => {
        $('#informacoesFinans').show().html('Simulador site Finans. <br/> Tecnologias usadas: HTML, CSS e Javascript.');
    });
});
$(document).ready(() => {
    $('#urna').mouseenter(() => {
        $('#informacoesUrna').show(1000).html('Simulador de urna eletrônica. <br> Tecnologias usadas: HTML, CSS e Javascript.');
    });
});