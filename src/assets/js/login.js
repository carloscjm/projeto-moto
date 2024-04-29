// Adicionando ação ao clicar no botão usando jQuery
$('#acao-login').click(function() {
    if ($('#senha').val() == '123' && $('#email').val() == 'teste@gmail.com') {
        window.location.href = '../../index.html';
        localStorage.setItem('logado', true);
    } else {
        $('#erro-login').css('display', 'block');
        localStorage.setItem('logado', false);
    }
});

$(document).ready(function() {
    let logado = localStorage.getItem('logado');
    if (logado) {
        $('#msg-logado').css('display', 'block');
        setTimeout(function() {
            window.location.href = '../../index.html';
        }, 3000);
    }
});