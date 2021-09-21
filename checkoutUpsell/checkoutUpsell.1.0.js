apx_widgets.worker.checkoutUpsell = {};
apx_widgets.worker.checkoutUpsell.list = [];
apx_widgets.worker.checkoutUpsell.style = "<style>/* APX CHECKOUT UPSELL */.apx_widgets_worker-checkoutUpsell{display: grid; grid-auto-columns: calc(33.3% - 13px); gap: 20px; margin-bottom: 20px; grid-template-areas: 'a a a';}.apx_widgets_worker-checkoutUpsell-item{display: flex; align-items:center; gap: 15px; text-align: center; padding: 20px!important; border: 1px solid #f2f2f2; box-shadow: 0px 0px 20px rgb(0 0 0 / 5%); border-radius: 5px;}.apx_widgets_worker-checkoutUpsell-item .info{display:flex; flex-direction:column; gap:15px;}.apx_widgets_worker-checkoutUpsell-item img{height: auto; width: 100px; margin: 0 auto;}.apx_widgets_worker-checkoutUpsell-item strong{font-size:14px;}.apx_widgets_worker-checkoutUpsell-item small{font-size:12px;}.apx_widgets_worker-checkoutUpsell-item a{display: block; border-radius: 5px; background: #2ecc71; color: #fff; text-transform: uppercase; font-weight: bold; padding: 10px; text-decoration: none;}@media(max-width:990px){.apx_widgets_worker-checkoutUpsell{grid-auto-columns: 100%; gap: 10px; margin: -10px 0 10px 0; grid-template-areas: unset;}}</style>";
apx_widgets.worker.checkoutUpsell.config = {};
apx_widgets.worker.checkoutUpsell.match = $('.pagina-carrinho:not(.carrinho-checkout)').length > 0;
apx_widgets.worker.checkoutUpsell.run = function(el){
    $('<div class="apx_widgets_worker-checkoutUpsell"></div>').insertAfter('#li-box-payment-minimum-value');
    $('tr[data-produto-id]').each(function(){
        let sku = $(this).find('.produto-info > ul > li:first-child > span > strong').text().trim();
        let upsellItem = apx_widgets.worker.checkoutUpsell.list.filter(el => sku.toLowerCase().trim().includes(el.sku.toLowerCase().trim()));
        //console.log(upsellItem);
        if(upsellItem.length > 1){
            $.each(upsellItem, function(k, upItem){
                let itemId = upItem.addToCart.split('/')[5];
                if($('tr[data-produto-id="'+itemId+'"]').length == 0 && $('a[href="'+upItem.addToCart+'"]').length == 0){
                    let item = $('<div class="apx_widgets_worker-checkoutUpsell-item"></div>');
                    let itemInfo = $('<div class="info"></div>');
                    upItem.image != undefined ? item.append('<img src="'+ upItem.image +'"/>') : '';
                    upItem.title != undefined ? itemInfo.append('<strong>'+ upItem.title +'</strong>') : '';
                    upItem.subtitle != undefined ? itemInfo.append('<small>'+ upItem.subtitle +'</small>') : '';
                    upItem.confirmation != undefined ? itemInfo.append('<a href="'+ upItem.addToCart +'">'+ upItem.confirmation +'</a>') : itemInfo.append('<a href="'+ upItem.addToCart +'">Garantir oferta!</a>');
                    item.append(itemInfo);
                    item.appendTo('.apx_widgets_worker-checkoutUpsell');
                }
            })
            
        }
        if(upsellItem.length == 1){
            let itemId = upsellItem[0].addToCart.split('/')[5];
            if($('tr[data-produto-id="'+itemId+'"]').length == 0 && $('a[href="'+upsellItem[0].addToCart+'"]').length == 0){
                let item = $('<div class="apx_widgets_worker-checkoutUpsell-item"></div>');
                let itemInfo = $('<div class="info"></div>');
                upsellItem[0].image != undefined ? item.append('<img src="'+ upsellItem[0].image +'"/>') : '';
                upsellItem[0].title != undefined ? itemInfo.append('<strong>'+ upsellItem[0].title +'</strong>') : '';
                upsellItem[0].subtitle != undefined ? itemInfo.append('<small>'+ upsellItem[0].subtitle +'</small>') : '';
                upsellItem[0].confirmation != undefined ? itemInfo.append('<a href="'+ upsellItem[0].addToCart +'">'+ upsellItem[0].confirmation +'</a>') : itemInfo.append('<a href="'+ upsellItem[0].addToCart +'">Garantir oferta!</a>');
                item.append(itemInfo);
                item.appendTo('.apx_widgets_worker-checkoutUpsell');
            }
        }
        
    })
};