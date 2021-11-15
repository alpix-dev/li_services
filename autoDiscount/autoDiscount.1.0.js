apx_widgets.worker.autoDiscount = {};
apx_widgets.worker.autoDiscount.list = [];
apx_widgets.worker.autoDiscount.functions = {};
apx_widgets.worker.autoDiscount.config = {};
apx_widgets.worker.autoDiscount.match = $('.pagina-carrinho').length > 0;
apx_widgets.worker.autoDiscount.run = function(){
    
    let subtotal = $('.carrinho-checkout').length > 0 ? parseFloat($('[data-subtotal]').attr('data-subtotal').replace('.','').replace(',','.')) : parseFloat($('[data-subtotal-valor]').attr('data-subtotal-valor'));    
    
    let activeCoupom = $('.carrinho-checkout').length > 0 ? $('#inputCupom').val() : $('.possui-cupom a + input').val();
    
    if(activeCoupom != null){
        let query_ = apx_widgets.worker.autoDiscount.list.filter(el => el.coupom == activeCoupom);    
        if(parseInt(query_[0].min_subtotal) > parseInt(subtotal)){
            let url = "/carrinho/cupom/remover?cupom=" + activeCoupom;
            $.get( url, function( data ) {
                location.reload(); 
            });
        }
    }
    
    let query_ = apx_widgets.worker.autoDiscount.list.filter(el => parseFloat(el.min_subtotal) <= subtotal);    
    if(query_.length > 0){
        var higher;
        for (var i=0 ; i<query_.length ; i++) {
            if (higher == null || parseInt(query_[i].min_subtotal) > parseInt(higher.min_subtotal))
            higher = query_[i];
        }
    
        //console.log(localStorage.getItem(higher.coupom));
        if($('.carrinho-checkout').length > 0){
            if($('.carrinho-checkout #inputCupom').length == 0 && localStorage.getItem(higher.coupom) != 'true'){            
                $.post("/carrinho/cupom/validar", {cupom: higher.coupom}, function(result){                    
                    location.reload(); 
                });
            }
        }else{
            if($('#usarCupom').length > 0 && localStorage.getItem(higher.coupom) != 'true'){            
                $.post("/carrinho/cupom/validar", {cupom: higher.coupom}, function(result){
                    location.reload(); 
                });
            }
        }
    }

    

    $('.possui-cupom a').click(function(){
        localStorage.setItem($(this).next('input').val(),true);
    })
    console.log('apx_widgets.worker.autoDiscount OK');         
}

