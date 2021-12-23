apx_widgets.worker.autoDiscount = {};
apx_widgets.worker.autoDiscount.list = [];
apx_widgets.worker.autoDiscount.functions = {};
apx_widgets.worker.autoDiscount.config = {title:"Cupons disponíveis",description:"Ofertas disponíveis de acordo com os itens em seu carrinho. Basta clicar para ativar"};
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
    let availableCoupons = [];
    let query_ = apx_widgets.worker.autoDiscount.list.filter(el => parseFloat(el.min_subtotal) <= subtotal);    
    if(query_.length > 0){
        var higher;
        for (var i=0 ; i<query_.length ; i++) {
            if (higher == null || parseInt(query_[i].min_subtotal) > parseInt(higher.min_subtotal))
            higher = query_[i];
        }
        availableCoupons.push({cupom:higher.coupom, description:higher.description});
    }
    if($('tr[data-produto-id]').length > 0){
        query_ = apx_widgets.worker.autoDiscount.list.filter(el => el.sku !== undefined);    
        $.each(query_,function(k,item){
            let count = 0;
            $('tr[data-produto-id]').each(function(){
                let sku = $(this).find('.produto-info > ul > li:first-child > span > strong').text().trim();
                if(sku.includes(item.sku)){
                    count = count + parseInt($(this).attr('data-produto-quantidade'));
                }
            });
            if(count >= item.min_quantity){
                availableCoupons.push({cupom:item.coupom, description:item.description});
            }        
        });

        if(availableCoupons.length > 0){
            if(availableCoupons.length == 1){
                if($('.carrinho-checkout').length > 0){
                    if($('.carrinho-checkout #inputCupom').length == 0 && sessionStorage.getItem(availableCoupons[0].cupom) != 'true'){            
                        $.post("/carrinho/cupom/validar", {cupom: availableCoupons[0].cupom}, function(result){                    
                            location.reload(); 
                        });
                    }
                }else{
                    if($('#usarCupom').length > 0 && sessionStorage.getItem(availableCoupons[0].cupom) != 'true'){            
                        $.post("/carrinho/cupom/validar", {cupom: availableCoupons[0].cupom}, function(result){
                            location.reload(); 
                        });
                    }
                }
            }else{
                $('<tr id="apx_coupom"><td colspan="6"><strong class="cor-secundaria">'+ apx_widgets.worker.autoDiscount.config.title +'</strong><p>'+ apx_widgets.worker.autoDiscount.config.description +'</p><div></div></td></tr>').insertAfter($('#usarCupom').closest('tr'));        
                $.each(availableCoupons,function(k,item){
                    $('#apx_coupom > td > div').append('<div><form action="/carrinho/cupom/validar" method="post"><input name="cupom" type="hidden" value="'+ item.cupom +'"/><button type="submit">'+ item.cupom +'</button></form><p>'+ item.description +'</p></div>')
                })
            }
        }
        //console.log(activeCoupom)
        if(activeCoupom !== undefined){
            let existInList = apx_widgets.worker.autoDiscount.list.filter(el => el.coupom == activeCoupom);    
            let isAvailable = availableCoupons.filter(el => el.cupom == activeCoupom);    
            if(existInList.length > 0 && isAvailable.length == 0){
                $.get('/carrinho/cupom/remover?cupom='+activeCoupom, function(result){                    
                    location.reload(); 
                });
            }            
        }
    }
    
    

    
    $('.possui-cupom a').click(function(){
        sessionStorage.setItem($(this).next('input').val(),true);
    })
    console.log('apx_widgets.worker.autoDiscount OK');         
}