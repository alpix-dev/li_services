apx_widgets.worker.autoDiscount = {};
apx_widgets.worker.autoDiscount.list = [];
//apx_widgets.worker.autoDiscount.list.push({coupom:"ALPIX5",min_subtotal:1000});
apx_widgets.worker.autoDiscount.functions = {};
apx_widgets.worker.autoDiscount.style = "<style>/* AUTO COUPOM */label[for='usarCupom']{display:none}.remover-cupom{display:none;}</style>";
apx_widgets.worker.autoDiscount.config = {};
apx_widgets.worker.autoDiscount.match = $('.pagina-carrinho').length > 0;
apx_widgets.worker.autoDiscount.run = function(){
    $('label[for="usarCupom"]').closest('tr').hide();
    let subtotal = parseFloat($('[data-subtotal-valor]').attr('data-subtotal-valor'));
    
    let query_ = apx_widgets.worker.autoDiscount.list.filter(el => parseFloat(el.min_subtotal) <= subtotal);
    console.log(query_);
    if(query_.length > 0){
        var higher;
        for (var i=0 ; i<query_.length ; i++) {
            if (higher == null || parseInt(query_[i].min_subtotal) > parseInt(higher.min_subtotal))
            higher = query_[i];
        }
        console.log(higher);

        $('#usarCupom').val(higher.coupom);
        $('#usarCupom').closest('form').submit();
    }

    console.log('apx_widgets.worker.autoDiscount OK');     
    
}

