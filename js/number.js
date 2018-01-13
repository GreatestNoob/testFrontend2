$('.quantity-up').on('click', function(){
    var elem = $(this).closest('.quantity').find('.quantity-val');
    var val = Number(elem.val())+1;
    elem.val(val);
});

$('.quantity-down').on('click', function(){
    var elem = $(this).closest('.quantity').find('.quantity-val');
    var val = Number(elem.val())-1;
    if (val < 1) val = 1;
    elem.val(val);
});