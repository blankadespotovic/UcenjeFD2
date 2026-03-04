$(document).foundation();


$('#promijeniNaslov').click(function(){
    console.log('Kliknuo sam Simple button');
    $('#naslov').text('Dobrodošli');
    return false;
});

$('#sakrijKomponente').click(function(){
    $('#komponente').hide();
    return false;
});

$('#prikaziKomponente').dblclick(function(){
    $('#komponente').show();
});

const boja = 'rgb(214.8186602871, 235.9894736842, 250.0313397129)';

$('.callout.primary').mouseover(function(){
    $(this).css('background-color', '#eee');
});

$('.callout.primary').mouseout(function(){
    $(this).css('background-color',boja);
});

$('#crveno').click(function(){
    $('p').css('color', 'red');
    return false;
})

