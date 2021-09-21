apx_widgets.worker.crossSelling = {};
apx_widgets.worker.crossSelling.list = [];
//apx_widgets.worker.crossSelling.list.push({sku : "D8L4AHNAD", products : ['https://alpix-battle-ground.lojaintegrada.com.br/g100snky3-camiseta-basica-feminina','https://alpix-battle-ground.lojaintegrada.com.br/jaqueta-couro-preta','https://alpix-battle-ground.lojaintegrada.com.br/produto-grade-atacado']});
apx_widgets.worker.crossSelling.style = "<style>/* APX BUY TOGETHER */.apx_widgets_worker-crossSelling-item > div:nth-child(2){cursor:pointer;}.apx_widgets_worker-crossSelling{display: flex; flex-direction: column; gap: 15px; margin: 30px 0; padding: 20px!important; border: 1px solid #f2f2f2; box-shadow: 0px 0px 20px rgb(0 0 0 / 5%); border-radius: 5px;}.apx_widgets_worker-crossSelling > strong{font-size: 16px; display: block; margin-bottom:15px;}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item{display: flex; gap: 20px;}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item > div label{}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item > div select{}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item > div span{}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item > div img{width:60px}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item-options{display: flex; align-items: center; gap: 5px;}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item-options > span{border: 1px solid #ccc; position: relative; border-radius: 2px; line-height: 30px; padding: 0 6px; min-width: 18px; text-align: center; cursor:pointer;}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item-options > span.active{background: #000; color: #fff; border-color:#000;}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item:not(:last-child){border-bottom: 1px solid #f2f2f2; padding-bottom: 15px;}.apx-gap-vertical-10{display:flex;flex-direction: column;gap:10px;}.apx_widgets_worker-crossSelling-item-options .indisponivel{pointer-events:none!important;}.apx_widgets_worker-crossSelling-item-options .indisponivel .icon-remove.hide{display:block!important;}@media(max-width:990px){.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item > div span{font-size:11px;}.apx_widgets_worker-crossSelling .apx_widgets_worker-crossSelling-item > div span{border-width: 0px 0px 20px 20px;}}</style>";
apx_widgets.worker.crossSelling.config = {target: ".principal .acoes-produto", preload: true, title: "Aproveite e leve também", insertFunction: function(apx_widgetscrossSelling){if(apx_widgets.worker.crossSelling.config.preload == true){apx_widgetscrossSelling.appendTo($(apx_widgets.worker.crossSelling.config.target).first().prev('.apx_preload'));$(apx_widgets.worker.crossSelling.config.target).first().prev('.apx_preload').addClass('loaded')}else{apx_widgetscrossSelling.insertBefore($(apx_widgets.worker.crossSelling.config.target).first())}},};
apx_widgets.worker.crossSelling.match = $('.pagina-produto').length > 0;
apx_widgets.worker.crossSelling.run = function(el){
    let productSku = $('.produto').find('[itemprop="sku"]').first().text().toLowerCase().trim();
    let query_ = apx_widgets.worker.crossSelling.list.filter(el => el.sku.toLowerCase().trim() === productSku.toLowerCase().trim());
    
    var apx_widgetscrossSelling = $('<div class="apx_widgets_worker-crossSelling"><strong>'+ apx_widgets.worker.crossSelling.config.title +'</strong></div>');        
    if(query_.length > 0){
        if(apx_widgets.worker.crossSelling.config.preload == true){
            $('<div class="apx_preload"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>').insertBefore($(apx_widgets.worker.crossSelling.config.target).first());
        }
        apx_widgets.functions.crossSellingGet(0,query_[0].products.slice(0,3), apx_widgetscrossSelling)        
    }
};


apx_widgets.functions.crossSellingGet = function (k, query_, apx_widgetscrossSelling){
    $.get(query_[k], function(data){
        let result = $(data);
        let name = result.find('.principal .nome-produto.titulo').text();
        let img = result.find('#imagemProduto').attr('src');
        let hasVariant = result.find('.principal .acoes-produto').length > 1 ? true : false;
        let price = hasVariant ? '' : result.find('.principal .acoes-produto .preco-produto .titulo').text().trim();
        let urlAdd = hasVariant ? '' : result.find('.principal .acoes-produto .comprar > a').attr('href');
        let variantGrade = [];
        let crossSellingProduct = $('<div class="apx_widgets_worker-crossSelling-item"></div>');
        crossSellingProduct.append('<div><input type="checkbox"/></div>');
        crossSellingProduct.append('<div><img src="'+ img +'"/></div>');
        let crossSellingProductInfo = $('<div class="apx-gap-vertical-10"></div>');
        crossSellingProductInfo.append('<label data-name><a href="'+query_[k]+'" target="_blank" style="text-decoration:none">'+ name +'</a></label>');
        if(hasVariant){                    
            let options = $('<div class="apx_widgets_worker-crossSelling-item-options"></div>');
            options.append(result.find('.atributos'));
            options.find('.atributo-item').toggleClass('atributo-item atributo-item-crossSelling');
            result.find('.principal .acoes-produto').each(function(k2, item){
                let price_opt = $(this).find('.preco-produto .titulo').text().trim();
                let productVariants = $(this).attr('data-variacao-id').split('-');
                variantGrade.push({price: price_opt, options: productVariants});
                let url_opt = $(this).find('.botao.botao-comprar.principal.grande').attr('href');                        
                options.append('<input type="hidden" name="apx_widgets_worker-crossSelling-item-id-'+ k2 +'" value="'+ url_opt +'" data-variacao-id="'+ $(this).attr('data-variacao-id') +'"/>');                                                                        
            });
            
            options.attr('variants',JSON.stringify(variantGrade));
            crossSellingProductInfo.append(options);
            crossSellingProductInfo.append('<b class="apx_widgets_worker-crossSelling-item-price">'+ price +'</b>');
        }else{
            crossSellingProductInfo.append('<input type="hidden" class="active" name="apx_widgets_worker-crossSelling-item-id-'+ k +'" value="'+ urlAdd +'"/>');
            crossSellingProductInfo.append('<b class="apx_widgets_worker-crossSelling-item-price">'+ price +'</b>');
        }               
        
        crossSellingProduct.append(crossSellingProductInfo);
        apx_widgetscrossSelling.append(crossSellingProduct);
        if (query_.length == k+1){
            apx_widgets.worker.crossSelling.config.insertFunction(apx_widgetscrossSelling);
            $('.apx_widgets_worker-crossSelling .atributos .atributo-item-crossSelling').click(function(){
                let me = $(this);
                let variantOptions = JSON.parse($(this).closest('.apx_widgets_worker-crossSelling-item-options').attr('variants'));
                let viableOptions = [];
                let dtVariacaoId = $(this).attr('data-variacao-id');
                let dtGradeId = $(this).attr('data-grade-id');
                
                if($(this).closest('.atributos').children('div').length == 1 ){
                    let firstOpt = $(this).attr('data-variacao-id');
                    $(this).closest('ul').find('li').removeClass('active');
                    $(this).closest('li').addClass('active');         
                    let found = variantOptions.filter(el => parseInt(el.options[0]) == parseInt(firstOpt));
                    if(found.length > 0){
                        me.closest('.apx_widgets_worker-crossSelling-item').find('.apx_widgets_worker-crossSelling-item-price').text(found[0].price);
                        me.closest('.apx_widgets_worker-crossSelling-item').find('input[type="hidden"]').addClass('indisponivel').removeClass('active');
                        me.closest('.apx_widgets_worker-crossSelling-item').find('input[type="hidden"][data-variacao-id="'+ JSON.stringify(firstOpt).replace('[','').replace(']','').replace('"','').replace('","','-').replace('"','') +'"]').addClass('active').removeClass('indisponivel');
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
                        let firstOpt = $(this).closest('.apx_widgets_worker-crossSelling-item-options').find('.atributos > div:first-child li.active > a').attr('data-variacao-id');
                        let secondOpt = $(this).attr('data-variacao-id');
                        currentOption.push(firstOpt,secondOpt);
                        $(this).closest('ul').find('li').removeClass('active');
                        $(this).closest('li').addClass('active');                                
                        let found = variantOptions.filter(el => JSON.stringify(el.options) == JSON.stringify(currentOption));
                        if(found.length > 0){
                            me.closest('.apx_widgets_worker-crossSelling-item').find('.apx_widgets_worker-crossSelling-item-price').text(found[0].price);
                            me.closest('.apx_widgets_worker-crossSelling-item').find('input[type="hidden"]').addClass('indisponivel').removeClass('active');
                            me.closest('.apx_widgets_worker-crossSelling-item').find('input[type="hidden"][data-variacao-id="'+ JSON.stringify(currentOption).replace('[','').replace(']','').replace('"','').replace('","','-').replace('"','') +'"]').addClass('active').removeClass('indisponivel');

                        }
                    }
                }
            });         
            
            $('.apx_widgets_worker-crossSelling-item > div:nth-child(2), .apx_widgets_worker-crossSelling-item > div:nth-child(3)').click(function(){
                $(this).parent('.apx_widgets_worker-crossSelling-item').find('[type="checkbox"]').attr('checked',true).change();
            })
            $('.principal .acoes-produto a').click(function(e){
                e.preventDefault();                
                let productsToAdd = [];
                let flag = true;
                $('.apx_widgets_worker-crossSelling-item input[type="checkbox"]:checked').each(function(){
                    if($(this).closest('.apx_widgets_worker-crossSelling-item').find('input[type="hidden"].active').length == 1){
                        productsToAdd.push($(this).closest('.apx_widgets_worker-crossSelling-item').find('input[type="hidden"].active').val());
                    }else{
                        alert('Selecione a variação do produto '+  $(this).closest('.apx_widgets_worker-crossSelling-item').find('[data-name]').text());
                        flag = false;
                    };
                })
                if(flag == true){
                    if(productsToAdd.length == 0){
                        apx_widgets.functions.blockPage(false);
                        window.location = $(this).attr('href');                   
                    }else{
                        apx_widgets.functions.blockPage(true);
                        apx_widgets.functions.crossSellingAjax(0,productsToAdd, $(this).attr('href'));
                    }
                }
            });
            console.log('apx_widgets.worker.crossSelling OK');            
        }else{
            apx_widgets.functions.crossSellingGet(k+1, query_, apx_widgetscrossSelling);
        }
    }).done(function() {
        
    });
};

apx_widgets.functions.crossSellingAjax = function (i, calls, primary_product){    
    $.get(calls[i], function(data){
        
    })
    .done(function(data){
        if(calls.length == i+1){
            apx_widgets.functions.blockPage(false);
            window.location = primary_product;
        }else{
            apx_widgets.functions.crossSellingAjax(i + 1, calls,  primary_product)
        }
    })
    .fail(function(data){
        apx_widgets.functions.blockPage(false);
        console.log('apx_widgets.worker.crossSelling - Err - ' + i);
    });          
};