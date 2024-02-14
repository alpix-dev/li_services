apx_widgets.worker.sideCartPro = {};
apx_widgets.worker.sideCartPro.list = [{}];
apx_widgets.worker.sideCartPro.functions = {};
apx_widgets.worker.sideCartPro.style = "<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/alpix-dev/li_services/sideCartPro/sideCartPro.1.0.css' type='text/css'>";
apx_widgets.worker.sideCartPro.config = {
    iconClose: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>',
    title: "Meu Carrinho"    
};
apx_widgets.worker.sideCartPro.match = $('.pagina-carrinho').length == 0;
apx_widgets.worker.sideCartPro.run = function(){
    $('.botao-comprar-ajax').unbind();
    $('.botao-comprar-ajax').removeAttr('data-loading-text');
    $('.botao-comprar-ajax').addClass('apx_widgets_worker-sideCartPro-buttonBuy-ajax').removeClass('botao-comprar-ajax');
    $(document).on("click", ".apx_widgets_worker-sideCartPro-buttonBuy-ajax", function(o) {
        o.preventDefault();
        var n = $(this);
        let previousText = n.attr('text');
        n.addClass("loading");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(p) {
            if (p.status !== "sucesso") {
                alert(p.mensagem);
            } else {
                let D = { 
                    id: p.carrinho_id ,
                    items: [{
                        item_id : p.produto.id,
                        item_sku: p.produto.sku,
                        item_name: p.produto.nome,
                        price: p.produto.preco,
                        quantity: p.produto.quantidade
                    }]
                };
                var x = sendMetrics({
                    type: "event",
                    name: "add_to_cart",
                    data: D
                });
                sessionStorage.setItem('carrinho_id',p.carrinho_id);
                $(document).trigger("li_add_to_cart", [x, D]);
                apx_widgets.worker.sideCartPro.functions.sideCartLoadContent();
            }
        }).fail(function(p) {
            window.location = n.attr("href")
        }).always(function() {            
            n.text(previousText).removeClass("loading");
        })
    });

    $(document).on("click", "#cabecalho .carrinho > a", function(e) {
        e.preventDefault();
        if($('#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content').is(':empty')){
            apx_widgets.worker.sideCartPro.functions.sideCartLoadContent();
        }else{
            apx_widgets.worker.sideCartPro.functions.sideCartToggle();
        } 
        
        let carrinho_id = sessionStorage.getItem('carrinho_id');
        let carrinho_minicart = sessionStorage.getItem(`carrinho_minicart`);
        
        if(carrinho_id && carrinho_minicart){
            let cart = {
                currency: 'BRL',
                id: carrinho_id,
                value: JSON.parse(carrinho_minicart).totals.items,
                coupon: '',
                items: JSON.parse(carrinho_minicart).items.map(function(item) {
                    return {
                      item_id: item.id.toString(),
                      item_sku: item.sku,
                      item_name: item.name,
                      price: item.price.sellingPrice,
                      quantity: item.quantity
                    }
                  })
            };
            var eventID = sendMetrics({
                type: 'pageview',
                name: 'view_cart',
                data: cart
            });
            $(document).trigger('li_view_cart', [eventID, cart]);            
        }            
    });


    apx_widgets.worker.sideCartPro.functions.sideCartSet();
    apx_widgets.worker.sideCartPro.functions.sideCartActions();
    $(window).resize(function(){                
        apx_widgets.worker.sideCartPro.functions.sideCartScroll();        
    });
    console.log('apx_widgets.worker.sideCartPro OK'); 
}

apx_widgets.worker.sideCartPro.functions.sideCartSet = function(){
    if($('.apx_widgets_worker-aside-shadow').length == 0){
        $('body').append('<div class="apx_widgets_worker-aside-shadow"></div>');
        
        $('body .apx_widgets_worker-aside-shadow').click(function(){
            $('body').removeClass('sideCart-visible').removeClass('asideSearch-visible').removeClass('asideMenu-visible').removeClass('asideAccount-visible');
        })
    }
    $('body').append('<div id="apx_widgets_worker-sideCartPro"><div id="apx_widgets_worker-sideCartPro-header"><button type="button" onclick="apx_widgets.worker.sideCartPro.functions.sideCartToggle();">'+ apx_widgets.worker.sideCartPro.config.iconClose +'</button><span>'+ apx_widgets.worker.sideCartPro.config.title +'</span></div><div id="apx_widgets_worker-sideCartPro-content"></div><div id="apx_widgets_worker-sideCartPro-footer"><a href="/carrinho/index" class="botao principal botao-comprar">Finalizar Compra</div></div></div>');    
}

apx_widgets.worker.sideCartPro.functions.sideCartScroll = function(){
    if($("#apx_widgets_worker-sideCartPro-content .scroll").length){
        let h = $('#apx_widgets_worker-sideCartPro-header').innerHeight() + $('#apx_widgets_worker-sideCartPro-content .table-footer').innerHeight() + $('#apx_widgets_worker-sideCartPro-footer').innerHeight();
        let maxheight = $('#apx_widgets_worker-sideCartPro').innerHeight()
        $('#apx_widgets_worker-sideCartPro-content .scroll').css('height','calc('+ maxheight +'px - ' + h + 'px');
    }
}

apx_widgets.worker.sideCartPro.functions.sideCartActions = function(html){
    $(document).on("click", "#apx_widgets_worker-sideCartPro .table-body .excluir a, #apx_widgets_worker-sideCartPro .table-body .quantidade a:not(.atualizar-quantidade), #apx_widgets_worker-sideCartPro .cupom-sucesso a", function(p) {
        p.preventDefault();
        apx_widgets.functions.blockPage(true);
        var n = $(this);
        var o = $(this).attr("href");
        let hasZero = false;
        if(o.includes('atualizar')){
            hasZero = parseInt(o.split('atualizar/')[1]) == 0 ? true : false;
        }
        if(hasZero == true){
            apx_widgets.functions.blockPage(false);
            return false;
        }else{
            $.ajax({
                url: $(this).attr("href").replace("https:", ""),
                dataType: "json"
            }).done(function(q) {
                if (q.status !== "sucesso") {
                    alert(q.mensagem);
                } else {
                    if ("quantidade" === q.tipo) {
                        D = {
                            cart_id: q.carrinho_id,
                            item_id: q.produto_id,
                            quantity: q.quantidade
                        };
                        var x = sendMetrics({
                            type: "event",
                            name: "change_quantity",
                            data: D
                        });
                        $(document).trigger("li_change_quantity", [x, D])
                    } else "remover" === q.tipo && (D = {
                        cart_id: q.carrinho_id,
                        item_id: q.produto_id
                    }, x = sendMetrics({
                        type: "event",
                        name: "remove_from_cart",
                        data: D
                    }), $(document).trigger("li_remove_from_cart", [x, D]));
                    apx_widgets.worker.sideCartPro.functions.sideCartLoadContent();
                }
            }).fail(function(q) {
                window.location = o
            }).always(function() { apx_widgets.functions.blockPage(false); })
        }
        
    });

    $('#theme_header-functions > li > .carrinho > a').click(function(e){
        e.preventDefault();
        if($('#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content').is(':empty')){
            apx_widgets.worker.sideCartPro.functions.sideCartLoadContent();
        }else{
            apx_widgets.worker.sideCartPro.functions.sideCartToggle();
        }
    })

    $('body').on('click','#apx_widgets_worker-sideCartPro [for="usarCupom"]',function(){
        $(this).next('.controls').toggle();
        apx_widgets.worker.sideCartPro.functions.sideCartScroll();
    });
}
apx_widgets.worker.sideCartPro.functions.sideCart = function(){
    //$('#apx_widgets_worker-sideCartPro-content').html(html);
    $('body').addClass('sideCart-visible');  
    apx_widgets.worker.sideCartPro.functions.sideCartScroll();  
}

apx_widgets.worker.sideCartPro.functions.sideCartToggle = function(){
    if($('#apx_widgets_worker-sideCartPro-content:empty').length){
        apx_widgets.worker.sideCartPro.functions.sideCartLoadContent();
    }
    $('body').toggleClass('sideCart-visible');
}

apx_widgets.worker.sideCartPro.functions.sideCartLoadContent = function(){
    $("#apx_widgets_worker-sideCartPro-content").load("/carrinho/mini", function() {
        apx_widgets.worker.sideCartPro.functions.sideCart()
    });
}