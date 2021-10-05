apx_widgets.worker.sellAsKit = {};
apx_widgets.worker.sellAsKit.list = [];
//apx_widgets.worker.sellAsKit.list.push({identifier : "D8L4AHNAD", products : ['https://alpix-battle-ground.lojaintegrada.com.br/g100snky3-camiseta-basica-feminina','https://alpix-battle-ground.lojaintegrada.com.br/g100snky3-camiseta-basica-feminina','https://alpix-battle-ground.lojaintegrada.com.br/jaqueta-couro-preta','https://alpix-battle-ground.lojaintegrada.com.br/produto-grade-atacado']});
apx_widgets.worker.sellAsKit.style = "<style>/* APX BUY TOGETHER */.apx_widgets_worker-sellAsKit-item > div:nth-child(2){cursor:pointer;}.apx_widgets_worker-sellAsKit{display: flex; flex-direction: column; gap: 15px; margin: 30px 0; padding: 20px!important; border: 1px solid #f2f2f2; box-shadow: 0px 0px 20px rgb(0 0 0 / 5%); border-radius: 5px;}.apx_widgets_worker-sellAsKit > strong{font-size: 16px; display: block; margin-bottom:15px;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item{display: flex; gap: 20px;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item > div label{}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item > div select{}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item > div span{}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item > div img{width:60px}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item-options{display: flex; align-items: center; gap: 5px;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item-options > span{border: 1px solid #ccc; position: relative; border-radius: 2px; line-height: 30px; padding: 0 6px; min-width: 18px; text-align: center; cursor:pointer;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item-options > span.active{background: #000; color: #fff; border-color:#000;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item:not(:last-child){border-bottom: 1px solid #f2f2f2; padding-bottom: 15px;}.apx-gap-vertical-10{display:flex;flex-direction: column;gap:10px;}.apx_widgets_worker-sellAsKit-item-options .indisponivel{pointer-events:none!important;}.apx_widgets_worker-sellAsKit-item-options .indisponivel .icon-remove.hide{display:block!important;}@media(max-width:990px){.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item > div span{font-size:11px;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item > div span{border-width: 0px 0px 20px 20px;}} .customCheckbox{color: #31bf86; border-radius: 3px; background: #fff; border: 1px solid #e6e6e6; width: 18px; height: 18px; display: block; position: relative;}.customCheckbox input{margin: 0; display: block; opacity: 0; height: 16px; width: 16px;}.customCheckbox input:checked + .customCheckboxCheck{}.customCheckbox .customCheckboxCheck{position: absolute; top: -4px; left: -1px; font-size: 22px; pointer-events:none;}.customCheckbox input:checked + .customCheckboxCheck:before{font-family: 'FontAwesome'; content: '\f14a'; font-style: normal;}.tabela-carrinho form{flex-direction: column; justify-content: center;}.pagina-produto .apx_widgets_worker-sellAsKit-item-options .atributos{margin-bottom:0;border-bottom:0!important;}.apx_widgets_worker-sellAsKit input:checked{background:green;}.apx_widgets_worker-sellAsKit li.active:after{content: '\f14a'; color: #31bf86; position: absolute; font-size: 15px; overflow: hidden; top: -5px; right: -5px; font-family: 'FontAwesome'; line-height: 13px; background: #fff; border-radius: 3px;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item .atributo-cor > ul > li > a{display:block;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item .atributo-cor > ul > li > a > span{border-width: 15px; display: block;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item > div span{border-width:1px;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item .atributos-sellAsKit > div > ul{display: flex; gap: 10px; margin: 15px 0;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item .customCheckbox{padding: 0!important; display: block; line-height: 26px;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item .atributos-sellAsKit > div > ul > li{position:relative}@media(max-width:990px){.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item > div span.customCheckbox{border-width:0;}.apx_widgets_worker-sellAsKit .apx_widgets_worker-sellAsKit-item{flex-wrap: wrap;}}</style>";
apx_widgets.worker.sellAsKit.config = {alwaysShow: true, sellSeparately: true, valueFrom: '.principal .acoes-produto .preco-produto .titulo', target: ".principal .acoes-produto", preload: true, title: "Aproveite e leve também", insertFunction: function(apx_widgetssellAsKit){if(apx_widgets.worker.sellAsKit.config.preload == true){apx_widgetssellAsKit.appendTo($(apx_widgets.worker.sellAsKit.config.target).first().prev('.apx_preload'));$(apx_widgets.worker.sellAsKit.config.target).first().prev('.apx_preload').addClass('loaded')}else{apx_widgetssellAsKit.insertBefore($(apx_widgets.worker.sellAsKit.config.target).first())}},};
apx_widgets.worker.sellAsKit.match = $('.pagina-produto').length > 0;
apx_widgets.worker.sellAsKit.run = function(el){
    let productKitURL = window.location.pathname;
    let query_ = apx_widgets.worker.sellAsKit.list.filter(el => el.sku.toLowerCase().trim() === productSku.toLowerCase().trim());
    
    var apx_widgetssellAsKit = $('<div class="apx_widgets_worker-sellAsKit"><strong>'+ apx_widgets.worker.sellAsKit.config.title +'</strong></div>');        
    if(query_.length > 0){
        if(apx_widgets.worker.sellAsKit.config.preload == true){
            $('<div class="apx_preload"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>').insertBefore($(apx_widgets.worker.sellAsKit.config.target).first());
        }
        apx_widgets.functions.sellAsKitGet(0,query_[0].products.slice(0,3), apx_widgetssellAsKit)        
    }
};


apx_widgets.functions.sellAsKitGet = function (k, query_, apx_widgetssellAsKit){
    $.get(query_[k], function(data){
        let result = $(data);
        let name = result.find('.principal .nome-produto.titulo').text();
        let img = result.find('#imagemProduto').attr('src');
        let hasVariant = result.find('.principal .acoes-produto').length > 1 ? true : false;
        let price = hasVariant ? '' : result.find(apx_widgets.worker.sellAsKit.config.valueFrom).text().trim();
        let urlAdd = hasVariant ? '' : result.find('.principal .acoes-produto .comprar > a').attr('href');
        let variantGrade = [];
        let sellAsKitProduct = $('<div class="apx_widgets_worker-sellAsKit-item"></div>');
        //sellAsKitProduct.append('<div><input type="checkbox"/></div>');
        if (apx_widgets.worker.sellAsKit.config.sellSeparately == true){
            sellAsKitProduct.append('<div><span class="customCheckbox"><input type="checkbox"/><i class="customCheckboxCheck"></i></span></div>');
        }
        sellAsKitProduct.append('<div><img src="'+ img +'"/></div>');
        let sellAsKitProductInfo = $('<div class="apx-gap-vertical-10"></div>');
        sellAsKitProductInfo.append('<label data-name><a href="'+query_[k]+'" target="_blank" style="text-decoration:none">'+ name +'</a></label>');
        if(hasVariant){                    
            let options = $('<div class="apx_widgets_worker-sellAsKit-item-options"></div>');
            options.append(result.find('.atributos'));
            options.find('.atributos').toggleClass('atributos atributos-sellAsKit');
            options.find('.atributo-item').toggleClass('atributo-item atributo-item-sellAsKit');
            result.find('.principal .acoes-produto').each(function(k2, item){
                let price_opt = $(this).find('.preco-produto .titulo').text().trim();
                let productVariants = $(this).attr('data-variacao-id').split('-');
                variantGrade.push({price: price_opt, options: productVariants});
                let url_opt = $(this).find('.botao.botao-comprar.principal.grande').attr('href');                        
                options.append('<input type="hidden" name="apx_widgets_worker-sellAsKit-item-id-'+ k2 +'" value="'+ url_opt +'" data-variacao-id="'+ $(this).attr('data-variacao-id') +'"/>');                                                                        
            });
            
            options.attr('variants',JSON.stringify(variantGrade));
            sellAsKitProductInfo.append(options);
            sellAsKitProductInfo.append('<b class="apx_widgets_worker-sellAsKit-item-price">'+ price +'</b>');
        }else{
            sellAsKitProductInfo.append('<input type="hidden" class="active" name="apx_widgets_worker-sellAsKit-item-id-'+ k +'" value="'+ urlAdd +'"/>');
            sellAsKitProductInfo.append('<b class="apx_widgets_worker-sellAsKit-item-price">'+ price +'</b>');
        }               
        
        sellAsKitProduct.append(sellAsKitProductInfo);
        apx_widgetssellAsKit.append(sellAsKitProduct);
        if (query_.length == k+1){
            apx_widgets.worker.sellAsKit.config.insertFunction(apx_widgetssellAsKit);
            $('.apx_widgets_worker-sellAsKit .atributos-sellAsKit .atributo-item-sellAsKit').click(function(){
                let me = $(this);
                let variantOptions = JSON.parse($(this).closest('.apx_widgets_worker-sellAsKit-item-options').attr('variants'));
                let viableOptions = [];
                let dtVariacaoId = $(this).attr('data-variacao-id');
                let dtGradeId = $(this).attr('data-grade-id');
                
                if($(this).closest('.atributos-sellAsKit').children('div').length == 1 ){
                    let firstOpt = $(this).attr('data-variacao-id');
                    $(this).closest('ul').find('li').removeClass('active');
                    $(this).closest('li').addClass('active');         
                    let found = variantOptions.filter(el => parseInt(el.options[0]) == parseInt(firstOpt));
                    if(found.length > 0){
                        me.closest('.apx_widgets_worker-sellAsKit-item').find('.apx_widgets_worker-sellAsKit-item-price').text(found[0].price);
                        me.closest('.apx_widgets_worker-sellAsKit-item').find('input[type="hidden"]').addClass('indisponivel').removeClass('active');
                        me.closest('.apx_widgets_worker-sellAsKit-item').find('input[type="hidden"][data-variacao-id="'+ JSON.stringify(firstOpt).replace('[','').replace(']','').replace('"','').replace('","','-').replace('"','') +'"]').addClass('active').removeClass('indisponivel');
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
                        let firstOpt = $(this).closest('.apx_widgets_worker-sellAsKit-item-options').find('.atributos-sellAsKit > div:first-child li.active > a').attr('data-variacao-id');
                        let secondOpt = $(this).attr('data-variacao-id');
                        currentOption.push(firstOpt,secondOpt);
                        $(this).closest('ul').find('li').removeClass('active');
                        $(this).closest('li').addClass('active');                                
                        let found = variantOptions.filter(el => JSON.stringify(el.options) == JSON.stringify(currentOption));
                        if(found.length > 0){
                            me.closest('.apx_widgets_worker-sellAsKit-item').find('.apx_widgets_worker-sellAsKit-item-price').text(found[0].price);
                            me.closest('.apx_widgets_worker-sellAsKit-item').find('input[type="hidden"]').addClass('indisponivel').removeClass('active');
                            me.closest('.apx_widgets_worker-sellAsKit-item').find('input[type="hidden"][data-variacao-id="'+ JSON.stringify(currentOption).replace('[','').replace(']','').replace('"','').replace('","','-').replace('"','') +'"]').addClass('active').removeClass('indisponivel');

                        }
                    }
                }
            });         
            
            $('.apx_widgets_worker-sellAsKit-item > div:nth-child(2), .apx_widgets_worker-sellAsKit-item > div:nth-child(3)').click(function(){
                $(this).parent('.apx_widgets_worker-sellAsKit-item').find('[type="checkbox"]').attr('checked',true).change();
            })
            $('.principal .acoes-produto a').click(function(e){
                e.preventDefault();                
                let productsToAdd = [];
                let flag = true;
                let condition = apx_widgets.worker.sellAsKit.config.sellSeparately == true ? '.apx_widgets_worker-sellAsKit-item input[type="checkbox"]:checked' : '.apx_widgets_worker-sellAsKit-item > div:first-child'
                $(condition).each(function(){
                    if($(this).closest('.apx_widgets_worker-sellAsKit-item').find('input[type="hidden"].active').length == 1){
                        productsToAdd.push($(this).closest('.apx_widgets_worker-sellAsKit-item').find('input[type="hidden"].active').val());
                    }else{
                        alert('Selecione a variação do produto '+  $(this).closest('.apx_widgets_worker-sellAsKit-item').find('[data-name]').text());
                        flag = false;
                    };
                })
                if(flag == true){
                    if(productsToAdd.length == 0){
                        apx_widgets.functions.blockPage(false);
                        window.location = $(this).attr('href');                   
                    }else{
                        apx_widgets.functions.blockPage(true);
                        apx_widgets.functions.sellAsKitAjax(0,productsToAdd, $(this).attr('href'));
                    }
                }
            });
            console.log('apx_widgets.worker.sellAsKit OK');            
        }else{
            apx_widgets.functions.sellAsKitGet(k+1, query_, apx_widgetssellAsKit);
        }
    }).done(function() {
        
    });
};

apx_widgets.functions.sellAsKitAjax = function (i, calls, primary_product){    
    $.get(calls[i], function(data){
        
    })
    .done(function(data){
        if(calls.length == i+1){
            apx_widgets.functions.blockPage(false);
            window.location = primary_product;
        }else{
            apx_widgets.functions.sellAsKitAjax(i + 1, calls,  primary_product)
        }
    })
    .fail(function(data){
        apx_widgets.functions.blockPage(false);
        console.log('apx_widgets.worker.sellAsKit - Err - ' + i);
    });          
};