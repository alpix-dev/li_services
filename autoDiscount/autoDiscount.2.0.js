apx_widgets.worker.autoDiscount = {};
apx_widgets.worker.autoDiscount.list = [];
apx_widgets.worker.autoDiscount.variables = {
    remove_discounts: [], 
    validated_discounts: [], 
    manually_removed_discounts : sessionStorage.getItem('apx_widgets_worker_autoDiscount_removedDiscounts') ? JSON.parse(sessionStorage.getItem('apx_widgets_worker_autoDiscount_removedDiscounts')) : [],
    //out_of_stock_gifts : sessionStorage.getItem('apx_widgets_worker_autoDiscount_outOfStock') ? JSON.parse(sessionStorage.getItem('apx_widgets_worker_autoDiscount_outOfStock')) : [],
};
apx_widgets.worker.autoDiscount.match = $('.pagina-carrinho');


// apx_widgets.worker.autoDiscount.list.push({     
//     trigger : "coupon", // "coupon", "list", "product" or "subtotal"
//     coupon_code : "AGODM5",
//     coupon_name : 156442742
// });

// apx_widgets.worker.autoDiscount.list.push({     
//     trigger : "product", // "coupon", "list", "product" or "subtotal"
//     min_quantity : 5,
//     product_id : "178961766",
//     coupon_name : ESQUENTACT10
// });

// apx_widgets.worker.autoDiscount.list.push({     
//     trigger : "list", // "coupon", "list", "product" or "subtotal"
//     products_id : "178962060,178961766",
//     coupon_name : ESQUENTACT10
    
// });

// apx_widgets.worker.autoDiscount.list.push({     
//     trigger : "subtotal", // "coupon", "list", "product" or "subtotal"
//     min_subtotal: 50,
//     coupon_name : ESQUENTACT10
// });

// apx_widgets.worker.autoDiscount.list.push({     
//     trigger : "different_products", // "coupon", "list", "product" or "subtotal"
//     min_quantity: 2,
//     coupon_name : "ESQUENTACT10",
//     priority: 1
// });

// apx_widgets.worker.autoDiscount.pushDiscount = function(item){
//     if(!apx_widgets.worker.autoDiscount.variables.validated_discounts.includes(item)){
//         apx_widgets.worker.autoDiscount.variables.validated_discounts.push(item);
//     }
// }

apx_widgets.worker.autoDiscount.loadDiscount = function(active_coupon){
    
    if(active_coupon){
        let q = apx_widgets.worker.autoDiscount.variables.validated_discounts.find(el => el.coupon_name == active_coupon);
        if(!q){
            $.get('/carrinho/cupom/remover?cupom='+active_coupon, function(result){                    
                location.reload(); 
            });
        }
    }

    let better = {priority : -999};
    $.each(apx_widgets.worker.autoDiscount.variables.validated_discounts, function(i_, item_){
        if(item_.priority > better.priority && !apx_widgets.worker.autoDiscount.variables.manually_removed_discounts.includes(item_.coupon_name)){
            better = item_;
        }
    });

    if(better.coupon_name && better.coupon_name != active_coupon){
        $.post("/carrinho/cupom/validar", {cupom: better.coupon_name}, function(result){
            location.reload(); 
        });
    }

        
    $('body').on('click','.remover-cupom', function(e){
        e.preventDefault();
        apx_widgets.worker.autoDiscount.variables.manually_removed_discounts.push($(this).closest('.cupom-sucesso').find('.cupom-codigo').text().trim());
        apx_widgets.worker.autoDiscount.variables.manually_removed_discounts = [...new Set(apx_widgets.worker.autoDiscount.variables.manually_removed_discounts)];
        sessionStorage.setItem('apx_widgets_worker_autoDiscount_removedDiscounts',JSON.stringify(apx_widgets.worker.autoDiscount.variables.manually_removed_discounts));
        window.location = $(this).attr('href');
    });

}

apx_widgets.worker.autoDiscount.run = function(){
    
    apx_widgets.worker.autoDiscount.variables.remove_discounts = $.map(apx_widgets.worker.autoDiscount.list, function(item){
        return item.coupon_name;
    });

    apx_widgets.worker.autoDiscount.variables.remove_discounts = [...new Set(apx_widgets.worker.autoDiscount.variables.remove_discounts)];

    let q;    
    let cart_subtotal = $('.carrinho-checkout').length > 0 ? parseFloat($('[data-subtotal]').attr('data-subtotal').replace('.','').replace(',','.')) : parseFloat($('[data-subtotal-valor]').attr('data-subtotal-valor'));        
    let cart_coupon = $('.cupom-codigo').text().trim();
    let cart_product_diff = $('[data-produto-id]').length;
    
    q = apx_widgets.worker.autoDiscount.list.filter(el => el.trigger == "different_products")
    if(q){
        $.each(q, function(k,item){
            if(cart_product_diff >= item.min_quantity){
                apx_widgets.worker.autoDiscount.variables.validated_discounts.push(item);
            }
        })
    }

    q = apx_widgets.worker.autoDiscount.list.filter(el => el.trigger == "subtotal")
    if(q){
        $.each(q, function(k,item){
            if(cart_subtotal >= parseFloat(item.min_subtotal)){
                apx_widgets.worker.autoDiscount.variables.validated_discounts.push(item);
            }
        })
    }

    q = apx_widgets.worker.autoDiscount.list.filter(el => el.trigger == "list")
    if(q){
        $.each(q, function(k,item){
            let list = item.products_id.split(';');
            let flag = 0;
            $('[data-produto-id]').each(function(){
                let me = $(this);
                flag = list.includes($(this).attr('data-produto-id')) ? flag + 1 : flag;
            });

            if(flag == list.length){
                apx_widgets.worker.autoDiscount.variables.validated_discounts.push(item);
            }
        })
    }

    q = apx_widgets.worker.autoDiscount.list.filter(el => el.trigger == "product")
    if(q){
        $.each(q, function(k,item){
            let product = $('[data-produto-id="'+ item.product_id +'"]');
            if(product && parseInt(product.attr('data-produto-quantidade')) >= item.min_quantity){
                apx_widgets.worker.autoDiscount.variables.validated_discounts.push(item);
            }
        })
    }

    apx_widgets.worker.autoDiscount.loadDiscount(cart_coupon ? cart_coupon : false);
    console.log('apx_widgets.worker.autoDiscount - OK');
};