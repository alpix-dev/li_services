apx_widgets.worker.checkoutUpsellingVariant = {};
apx_widgets.worker.checkoutUpsellingVariant.list = [];
//apx_widgets.worker.checkoutUpsellingVariant.list.push({sku : "FGGYJHTL2", products : ['https://alpix-battle-ground.lojaintegrada.com.br/jaleco-azul','https://alpix-battle-ground.lojaintegrada.com.br/produto-grade-atacado']});
//apx_widgets.worker.checkoutUpsellingVariant.list.push({sku : "MXN6UQ466", products : ['https://alpix-battle-ground.lojaintegrada.com.br/jaqueta-couro-preta','https://alpix-battle-ground.lojaintegrada.com.br/produto-grade-atacado','https://alpix-battle-ground.lojaintegrada.com.br/camiseta-simples']});
apx_widgets.worker.checkoutUpsellingVariant.style = "<style>/* APX CHECKOUT UPSELL VARIANT */.apx_widgets_worker-checkoutUpsellingVariant-item>div:nth-child(2){cursor: pointer;width:100%;}.apx_widgets_worker-checkoutUpsellingVariant{display: flex; flex-direction: row; gap: 15px; margin: 30px 0; border-radius: 5px; flex-wrap: wrap;}.apx_widgets_worker-checkoutUpsellingVariant>strong{font-size: 16px;display: block;margin-bottom: 15px;flex:0 0 100%}.apx_widgets_worker-checkoutUpsellingVariant-item button{display: block; border-radius: 5px; background: #2ecc71; color: #fff; text-transform: uppercase; font-weight: bold; padding: 10px; text-decoration: none; width: 100%;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item{display: flex; gap: 20px; flex: 0 0 calc(33% - 49px); border: 1px solid #f2f2f2!important; padding: 20px;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item>div label{font-weight:bold;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item>div select{}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item>div span{}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item>div img{width: 150px}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item-options{display: flex;align-items: center;gap: 5px;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item .apx_widgets_worker-checkoutUpsellingVariant-item-price{font-size: 18px;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item-options>span{border: 1px solid #ccc;position: relative;border-radius: 2px;line-height: 30px;padding: 0 6px;min-width: 18px;text-align: center;cursor: pointer;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item-options>span.active{background: #000;color: #fff;border-color: #000;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item:not(:last-child){border-bottom: 1px solid #f2f2f2;padding-bottom: 15px;}.apx-gap-vertical-10{display: flex;flex-direction: column;gap: 10px;}.apx_widgets_worker-checkoutUpsellingVariant-item-options .indisponivel{pointer-events: none!important;}.apx_widgets_worker-checkoutUpsellingVariant-item-options .indisponivel .icon-remove.hide{display: block!important;}@media(max-width:990px){.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item>div span{font-size: 11px;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item>div span{border-width: 0px 0px 20px 20px;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item{flex: 0 0 calc(100% - 42px); flex-direction:column;}.apx_widgets_worker-checkoutUpsellingVariant .apx_widgets_worker-checkoutUpsellingVariant-item>div img{width: auto; height: 60px; display: block;}}</style>";
apx_widgets.worker.checkoutUpsellingVariant.config = {
    target: '#li-box-payment-minimum-value',
    preload: true,
    title: "Talvez você goste...",
    insertFunction: function(apx_widgetscheckoutUpsellingVariant) {
        if (apx_widgets.worker.checkoutUpsellingVariant.config.preload == true) {
            apx_widgetscheckoutUpsellingVariant.appendTo($('.apx_preload.apx_widgetscheckoutUpsellingVariant'));
            $('.apx_preload.apx_widgetscheckoutUpsellingVariant').addClass('loaded');
        } else {
            apx_widgetscheckoutUpsellingVariant.insertBefore($(apx_widgets.worker.checkoutUpsellingVariant.config.target).first())
        }
        
    },
};
apx_widgets.worker.checkoutUpsellingVariant.match = $('.pagina-carrinho:not(.carrinho-checkout)').length > 0;
apx_widgets.worker.checkoutUpsellingVariant.run = function(el){
    var apx_widgetscheckoutUpsellingVariant = $('<div class="apx_widgets_worker-checkoutUpsellingVariant"><strong>'+ apx_widgets.worker.checkoutUpsellingVariant.config.title +'</strong></div>');        
    let flag = 0;
    let processProducts = [];
    $('tr[data-produto-id]').each(function(){          
        if(flag <= 3){
            let sku = $(this).find('.produto-info > ul > li:first-child > span > strong').text().trim();
            console.log(sku)
            let query_ = apx_widgets.worker.checkoutUpsellingVariant.list.filter(el => sku.toLowerCase().trim().includes(el.sku.toLowerCase().trim()));
            if(query_.length > 0){                
                $.each(query_[0].products,function(k,v){
                    if($('a[href="'+v+'"]').length == 0){
                        processProducts.push(v);
                    }
                });                
            }
            flag = flag + processProducts.length;
        }
    });    
    if(processProducts.length > 0){
        if(apx_widgets.worker.checkoutUpsellingVariant.config.preload == true){
            $('<div class="apx_preload apx_widgetscheckoutUpsellingVariant"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>').insertBefore($(apx_widgets.worker.checkoutUpsellingVariant.config.target).first());
        }
        apx_widgets.functions.checkoutUpsellingVariantGet(0,processProducts.slice(0,3), apx_widgetscheckoutUpsellingVariant)        
    }
};


apx_widgets.functions.checkoutUpsellingVariantGet = function (k, query_, apx_widgetscheckoutUpsellingVariant){
    $.get(query_[k], function(data){
        let result = $(data);
        let name = result.find('.principal .nome-produto.titulo').text();
        let img = result.find('#imagemProduto').attr('src');
        let hasVariant = result.find('.principal .acoes-produto').length > 1 ? true : false;
        let price = hasVariant ? '' : result.find('.principal .acoes-produto .preco-produto .titulo').text().trim();
        let urlAdd = hasVariant ? '' : result.find('.principal .acoes-produto .comprar > a').attr('href');
        let description = result.find('meta[name="description"]').attr('content');
        let variantGrade = [];
        let checkoutUpsellingVariantProduct = $('<div class="apx_widgets_worker-checkoutUpsellingVariant-item"></div>');
        //checkoutUpsellingVariantProduct.append('<div><input type="checkbox"/></div>');
        checkoutUpsellingVariantProduct.append('<div><img src="'+ img +'"/></div>');
        let checkoutUpsellingVariantProductInfo = $('<div class="apx-gap-vertical-10"></div>');
        checkoutUpsellingVariantProductInfo.append('<label data-name="'+ name +'" data-description="'+ description+ '" ><a href="'+query_[k]+'" target="_blank" style="text-decoration:none">'+ name +'</a></label>');
        
        if(hasVariant){                    
            let options = $('<div class="apx_widgets_worker-checkoutUpsellingVariant-item-options"></div>');
            options.append(result.find('.atributos'));
            options.find('.atributo-item').toggleClass('atributo-item atributo-item-checkoutUpsellingVariant');
            result.find('.principal .acoes-produto').each(function(k2, item){
                let price_opt = $(this).find('.preco-produto .titulo').text().trim();
                let productVariants = $(this).attr('data-variacao-id').split('-');
                variantGrade.push({price: price_opt, options: productVariants});
                let url_opt = $(this).find('.botao.botao-comprar.principal.grande').attr('href');                        
                options.append('<input type="hidden" name="apx_widgets_worker-checkoutUpsellingVariant-item-id-'+ k2 +'" value="'+ url_opt +'" data-variacao-id="'+ $(this).attr('data-variacao-id') +'"/>');                                                                        
            });
            
            options.attr('variants',JSON.stringify(variantGrade));
            checkoutUpsellingVariantProductInfo.append(options);
            checkoutUpsellingVariantProductInfo.append('<b class="apx_widgets_worker-checkoutUpsellingVariant-item-price">'+ price +'</b>');
        }else{
            checkoutUpsellingVariantProductInfo.append('<input type="hidden" class="active" name="apx_widgets_worker-checkoutUpsellingVariant-item-id-'+ k +'" value="'+ urlAdd +'"/>');
            checkoutUpsellingVariantProductInfo.append('<b class="apx_widgets_worker-checkoutUpsellingVariant-item-price">'+ price +'</b>');
        }               
        checkoutUpsellingVariantProductInfo.append('<div><button type="button">Adicionar</button></div>');
        checkoutUpsellingVariantProduct.append(checkoutUpsellingVariantProductInfo);
        
        apx_widgetscheckoutUpsellingVariant.append(checkoutUpsellingVariantProduct);
        if (query_.length == k+1){
            apx_widgets.worker.checkoutUpsellingVariant.config.insertFunction(apx_widgetscheckoutUpsellingVariant);
            $('.apx_widgets_worker-checkoutUpsellingVariant .atributos .atributo-item-checkoutUpsellingVariant').click(function(){
                let me = $(this);
                let variantOptions = JSON.parse($(this).closest('.apx_widgets_worker-checkoutUpsellingVariant-item-options').attr('variants'));
                let viableOptions = [];
                let dtVariacaoId = $(this).attr('data-variacao-id');
                let dtGradeId = $(this).attr('data-grade-id');
                
                if($(this).closest('.atributos').children('div').length == 1 ){
                    let firstOpt = $(this).attr('data-variacao-id');
                    $(this).closest('ul').find('li').removeClass('active');
                    $(this).closest('li').addClass('active');         
                    let found = variantOptions.filter(el => parseInt(el.options[0]) == parseInt(firstOpt));
                    if(found.length > 0){
                        me.closest('.apx_widgets_worker-checkoutUpsellingVariant-item').find('.apx_widgets_worker-checkoutUpsellingVariant-item-price').text(found[0].price);
                        me.closest('.apx_widgets_worker-checkoutUpsellingVariant-item').find('input[type="hidden"]').addClass('indisponivel').removeClass('active');
                        me.closest('.apx_widgets_worker-checkoutUpsellingVariant-item').find('input[type="hidden"][data-variacao-id="'+ JSON.stringify(firstOpt).replace('[','').replace(']','').replace('"','').replace('","','-').replace('"','') +'"]').addClass('active').removeClass('indisponivel');
                    }
                }else{
                    if($(this).closest('div').is(':first-child')){
                        $(this).closest('ul').find('li').removeClass('active');
                        $(this).closest('li').addClass('active');                                
                        $.each(variantOptions,function(key, oObj){
                            let found = oObj.options.filter(el => parseInt(el.trim()) === parseInt(dtVariacaoId.trim()));
                            if(found.length > 0){
                                viableOptions.push(oObj);
                            }
                        })
                        $(this).closest('div').next('div').find('li').addClass('indisponivel').removeClass('active');                                
                        $.each(viableOptions,function(key, oObj){
                            let found = oObj.options.filter(el => parseInt(el.trim()) != parseInt(dtVariacaoId.trim()));
                            me.closest('div').next('div').find('a[data-variacao-id="'+ found[0] +'"]').closest('li').removeClass('indisponivel');
                        });
                    }else{
                        let currentOption = []
                        let firstOpt = $(this).closest('.apx_widgets_worker-checkoutUpsellingVariant-item-options').find('.atributos > div:first-child li.active > a').attr('data-variacao-id');
                        let secondOpt = $(this).attr('data-variacao-id');
                        currentOption.push(firstOpt,secondOpt);
                        $(this).closest('ul').find('li').removeClass('active');
                        $(this).closest('li').addClass('active');                                
                        let found = variantOptions.filter(el => JSON.stringify(el.options) == JSON.stringify(currentOption));
                        if(found.length > 0){
                            me.closest('.apx_widgets_worker-checkoutUpsellingVariant-item').find('.apx_widgets_worker-checkoutUpsellingVariant-item-price').text(found[0].price);
                            me.closest('.apx_widgets_worker-checkoutUpsellingVariant-item').find('input[type="hidden"]').addClass('indisponivel').removeClass('active');
                            me.closest('.apx_widgets_worker-checkoutUpsellingVariant-item').find('input[type="hidden"][data-variacao-id="'+ JSON.stringify(currentOption).replace('[','').replace(']','').replace('"','').replace('","','-').replace('"','') +'"]').addClass('active').removeClass('indisponivel');

                        }
                    }
                }
            });         
            console.log('apx_widgets.worker.checkoutUpsellingVariant OK');            
        }else{
            apx_widgets.functions.checkoutUpsellingVariantGet(k+1, query_, apx_widgetscheckoutUpsellingVariant);
        }
    }).done(function() {
        
    });
};

$(document).on("click", ".apx_widgets_worker-checkoutUpsellingVariant-item button", function(r) {
    r.preventDefault();
    var q = $(this);
    let ajaxUrl = $(this).closest('.apx_widgets_worker-checkoutUpsellingVariant-item').find('input[type="hidden"].active');
    if(ajaxUrl.length == 0){
        alert('Selecione uma variação para prosseguir');
        return false;
    }else{
        window.location = ajaxUrl.first().val();
    }
});
