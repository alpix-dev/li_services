apx_widgets.worker.giftService = {};
apx_widgets.worker.giftService.list = [];
apx_widgets.worker.giftService.variables = {
    remove_gifts : [], 
    validated_gifts: [], 
    manually_removed_gifts : sessionStorage.getItem('apx_widgets_worker_giftService_removedGifts') ? JSON.parse(sessionStorage.getItem('apx_widgets_worker_giftService_removedGifts')) : [],
    out_of_stock_gifts : sessionStorage.getItem('apx_widgets_worker_giftService_outOfStock') ? JSON.parse(sessionStorage.getItem('apx_widgets_worker_giftService_outOfStock')) : [],
};
apx_widgets.worker.giftService.match = true;


// apx_widgets.worker.giftService.list.push({     
//     trigger : "coupon", // "coupon", "list", "product" or "subtotal"
//     coupon_code : "AGODM5",
//     gift_product_id : 156442742
// });

// apx_widgets.worker.giftService.list.push({     
//     trigger : "product", // "coupon", "list", "product" or "subtotal"
//     min_quantity : 5,
//     product_id : "178961766",
//     gift_product_id : 156442742
// });

// apx_widgets.worker.giftService.list.push({     
//     trigger : "list", // "coupon", "list", "product" or "subtotal"
//     products_id : "178962060,178961766",
//     gift_product_id : 156442742
    
// });

// apx_widgets.worker.giftService.list.push({     
//     trigger : "subtotal", // "coupon", "list", "product" or "subtotal"
//     min_subtotal: 50,
//     gift_product_id : 156442742
// });

apx_widgets.worker.giftService.pushGift = function(gift_id){
    if(!apx_widgets.worker.giftService.variables.validated_gifts.includes(gift_id)){
        apx_widgets.worker.giftService.variables.validated_gifts.push(gift_id);
    }
}
apx_widgets.worker.giftService.ajaxSequence = function(urls){
    let pagesLoaded = 0;
    $(document).ajaxComplete(function( event, xhr, settings ) {
        if(settings.url.includes('?brinde=1')){
            pagesLoaded++
            if(pagesLoaded == urls.length){
                window.location.reload();
            }
        }
    });

    $.each(urls,function(k,url){
        $.get(url)
        .done(function(result){
            let data = JSON.parse(result);
            if(data.status != "sucesso" && data.tipo == "adicionar"){
                apx_widgets.worker.giftService.variables.out_of_stock_gifts.push(data.produto.id);
                apx_widgets.worker.giftService.variables.out_of_stock_gifts = [...new Set(apx_widgets.worker.giftService.variables.out_of_stock_gifts)];
                sessionStorage.setItem('apx_widgets_worker_giftService_outOfStock',JSON.stringify(apx_widgets.worker.giftService.variables.out_of_stock_gifts));
            }
        });
    })
};

apx_widgets.worker.giftService.loadGifts = function(){
    let ajaxSequence = [];

    $.each(apx_widgets.worker.giftService.variables.validated_gifts,function(k,item){
        let q = apx_widgets.worker.giftService.variables.remove_gifts.indexOf(item);
        if(q != -1){
            apx_widgets.worker.giftService.variables.remove_gifts.splice(q,1);
        }
    });

    $.each(apx_widgets.worker.giftService.variables.remove_gifts,function(k,item){
        console.log(item);
        if(window.CARRINHO_PRODS.includes(item)){
            ajaxSequence.push('/carrinho/produto/' + item + '/remover?brinde=1')
        }
    });

    $.each(apx_widgets.worker.giftService.variables.validated_gifts,function(k,item){
        if(!window.CARRINHO_PRODS.includes(item) && !apx_widgets.worker.giftService.variables.manually_removed_gifts.includes(item) && !apx_widgets.worker.giftService.variables.out_of_stock_gifts.includes(item)){
            ajaxSequence.push('/carrinho/produto/' + item + '/adicionar?brinde=1')            
        }else{
            if(parseInt($('[data-produto-id="'+ item +'"]').attr('data-produto-quantidade')) > 1){
                ajaxSequence.push('/carrinho/produto/' + item + '/atualizar/1?brinde=1');                
            }else{
                $('[data-produto-id="'+ item +'"]').addClass('apx_widgets_worker_giftService-giftItem');
                $('[data-produto-id="'+ item +'"] form').after('<span class="apx_widgets_worker_giftService-quantity">1</span>');
                $('[data-produto-id="'+ item +'"] form').remove();    
            }
        }
    });
    
    $('body').on('click','.apx_widgets_worker_giftService-giftItem .icon-trash', function(e){
        e.preventDefault();
        apx_widgets.worker.giftService.variables.manually_removed_gifts.push(parseInt($(this).closest('[data-produto-id]').attr('data-produto-id')));
        apx_widgets.worker.giftService.variables.manually_removed_gifts = [...new Set(apx_widgets.worker.giftService.variables.manually_removed_gifts)];
        sessionStorage.setItem('apx_widgets_worker_giftService_removedGifts',JSON.stringify(apx_widgets.worker.giftService.variables.manually_removed_gifts));
        window.location = $(this).attr('href');
    });

    apx_widgets.worker.giftService.ajaxSequence(ajaxSequence);
}

apx_widgets.worker.giftService.run = function(){

    apx_widgets.worker.giftService.variables.remove_gifts = $.map(apx_widgets.worker.giftService.list, function(item){
        return item.gift_product_id;
    });

    apx_widgets.worker.giftService.variables.remove_gifts = [...new Set(apx_widgets.worker.giftService.variables.remove_gifts)];

    let q;
    
    let cart_subtotal = $('.carrinho-checkout').length > 0 ? parseFloat($('[data-subtotal]').attr('data-subtotal').replace('.','').replace(',','.')) : parseFloat($('[data-subtotal-valor]').attr('data-subtotal-valor'));        
    let cart_coupon = $('.cupom-codigo').text().trim().toLowerCase();
    
    q = apx_widgets.worker.giftService.list.filter(el => el.trigger == "coupon")
    if(q){
        $.each(q, function(k,item){
            if(item.coupon_code.trim().toLowerCase() == cart_coupon){
                apx_widgets.worker.giftService.pushGift(item.gift_product_id);
            }
        })
    }

    q = apx_widgets.worker.giftService.list.filter(el => el.trigger == "subtotal")
    if(q){
        $.each(q, function(k,item){
            if(cart_subtotal >= parseFloat(item.min_subtotal)){
                apx_widgets.worker.giftService.pushGift(item.gift_product_id);
            }
        })
    }

    q = apx_widgets.worker.giftService.list.filter(el => el.trigger == "list")
    if(q){
        $.each(q, function(k,item){
            let list = item.products_id.split(';');
            let flag = 0;
            $('[data-produto-id]').each(function(){
                let me = $(this);
                flag = list.includes($(this).attr('data-produto-id')) ? flag + 1 : flag;
            });

            if(flag == list.length){
                apx_widgets.worker.giftService.pushGift(item.gift_product_id);
            }
        })
    }

    q = apx_widgets.worker.giftService.list.filter(el => el.trigger == "product")
    if(q){
        $.each(q, function(k,item){
            let product = $('[data-produto-id="'+ item.product_id +'"]');
            if(product && parseInt(product.attr('data-produto-quantidade')) >= item.min_quantity){
                apx_widgets.worker.giftService.pushGift(item.gift_product_id);
            }
        })
    }

    apx_widgets.worker.giftService.loadGifts();
    console.log('apx_widgets.worker.giftService - OK');
};