var g = G$('vlado', 'voev', 'en');
g.greet().setLanguage('es').greet(true).log();


$('#login').click(function () {

    var loginGtr = G$('vlado', 'voev');
    $('#logindiv').hide();

    loginGtr.setLanguage($('#lang').val()).HMTLGreeting('#greeting', true).log();
})