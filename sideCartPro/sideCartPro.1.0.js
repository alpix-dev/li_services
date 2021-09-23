apx_widgets.worker.sideCartPro = {};
apx_widgets.worker.sideCartPro.list = [{}];
apx_widgets.worker.sideCartPro.functions = {};
apx_widgets.worker.sideCartPro.style = "<style>/* APX SIDECART PRO*/body{margin-right:0!important;}#apx_widgets_worker-sideCartPro-shadow{width: 100%; height: 100%; background: rgba(0,0,0,.5); position: fixed; top: 0; left: 0; z-index: 999; visibility:hidden; opacity:0; transition-delay: 0s; transition-duration: 0.4s; transition-property: all; transition-timing-function: ease;}#apx_widgets_worker-sideCartPro{position: fixed; top: 0; right: -320px; background: #fff; z-index: 999999999; height: 100vh; width: 320px; transition-delay: 0s; transition-duration: 0.4s; transition-property: right; transition-timing-function: ease;}.sideCart-visible #apx_widgets_worker-sideCartPro{right:0;}.sideCart-visible #apx_widgets_worker-sideCartPro-shadow{opacity:1;visibility: visible;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-header{display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom: 1px solid #f2f2f2; box-shadow: 0 5px 5px rgb(0 0 0 / 3%);}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-header button{background:transparent; border:0; outline:none; padding:0;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-header svg{height:26px;width:26px;fill: var(--primaryColor);}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-header span{font-size: 16px; text-transform: uppercase; color: var(--primaryColor); font-weight: 500;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content{}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content > .scroll{overflow-y:auto;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-header{display:none!important;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body{margin:0}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body tr{display: grid; grid-template-areas: 'image info trash' 'image info trash' 'image quantity value'; grid-template-columns: calc(20% - 10px) calc(60% - 10px) calc(20% - 10px); border-bottom: 1px solid #f2f2f2!important; border: 0; padding: 15px 15px; gap: 15px;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td{border:0;padding:0px;width:100%!important;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(1){grid-area:image}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(2){grid-area:info}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(3){grid-area:value}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(4){grid-area:quantity}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(4) .quantidade{width:fit-content;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(5){grid-area:trash;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(5),#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(5) *,#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(3),#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(3) *{text-align:right;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(3) *{font-size:12px;float:right;white-space:nowrap;margin:0;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(3) s{font-weight:300;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(3),#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-body td:nth-child(5){}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-footer{box-shadow: 0 -5px 5px rgb(0 0 0 / 3%);}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-footer tbody,#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-footer tbody tr,#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-footer tbody td{display: block!important; background: transparent; border: 0; width: 100%; padding: 0;}#apx_widgets_worker-sideCartPro .tabela-carrinho .produto-info a{box-sizing: content-box!important; overflow: hidden; z-index: 1; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; min-height: unset!important;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-footer{position: absolute; width: 100%; bottom: 0;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-footer a{background: #2ecc71; margin: 15px; width: calc(100% - 30px); box-sizing: border-box; color: #fff; text-transform: uppercase; font-weight: 600;}#apx_widgets_worker-sideCartPro .subtotal{text-align:center;}#apx_widgets_worker-sideCartPro .subtotal strong{margin-right:0;}#apx_widgets_worker-sideCartPro .scroll::-webkit-scrollbar{width: 4px;}#apx_widgets_worker-sideCartPro .scroll::-webkit-scrollbar-track{background: #f1f1f1;}#apx_widgets_worker-sideCartPro .scroll::-webkit-scrollbar-thumb{background: #888;}#apx_widgets_worker-sideCartPro .scroll::-webkit-scrollbar-thumb:hover{background: #555;}#apx_widgets_worker-sideCartPro .table-footer form{}#apx_widgets_worker-sideCartPro .table-footer form .control-group .control-label{width: auto; display: block; float: none; text-align: center; background: #f8f8f8; padding: 10px 0; margin:10px 0 0 0;}#apx_widgets_worker-sideCartPro .table-footer form .control-group b.cor-secundaria:before{content: 'Usar cupom de desconto'; font-size: 12px; vertical-align: middle; display: inline-block;}#apx_widgets_worker-sideCartPro .table-footer form .control-group b.cor-secundaria:after{content: '\f078'; font-family: FontAwesome-v4; font-size: 10px; display: inline-block; margin: -3px 0 0 5px; vertical-align: middle;}#apx_widgets_worker-sideCartPro .table-footer form .control-group b.cor-secundaria{font-size: 0; text-transform: uppercase; color: var(--primaryColor); font-weight: 500; line-height: initial;}#apx_widgets_worker-sideCartPro .tabela-carrinho .form-horizontal .controls{margin: 0; text-align: center; padding: 15px 0 0 0px; display: none;}#apx_widgets_worker-sideCartPro .tabela-carrinho .form-horizontal .controls .input-append{display: flex; padding: 0 10px;}#apx_widgets_worker-sideCartPro .tabela-carrinho .form-horizontal .controls .input-append input{-webkit-flex-basis: 0; flex-basis: 0; -webkit-flex-grow: 1; -moz-box-flex: 1; flex-grow: 1; max-width: 100%; margin-right: 10px;}#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-footer tbody > tr.possui-cupom,#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content .table-footer tbody tr .form-horizontal{display:none!important}#apx_widgets_worker-sideCartPro .cupom-sucesso > b.cor-secundaria{}#apx_widgets_worker-sideCartPro .cupom-sucesso > .cupom-codigo{}#apx_widgets_worker-sideCartPro .cupom-sucesso > a{}</style>";
apx_widgets.worker.sideCartPro.config = {
    iconClose: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>',
    title: "Meu Carrinho"    
};
apx_widgets.worker.sideCartPro.match = $('#carrinho-mini').length > 0 && $('.pagina-carrinho').length == 0 && $('.pagina-checkout').length == 0;
apx_widgets.worker.sideCartPro.run = function(){
    $(document).ajaxComplete(function(event, xhr, settings) {
        if(settings.url === "/carrinho/mini"){
            $('.modal-comprar-ajax-status').parent().hide();
            $('.fancybox-lock').removeClass('fancybox-lock');
            apx_widgets.worker.sideCartPro.functions.sideCart(xhr.responseText);
        }
    });
    apx_widgets.worker.sideCartPro.functions.sideCartSet();
    apx_widgets.worker.sideCartPro.functions.sideCartActions();
    $(window).resize(function(){                
        apx_widgets.worker.sideCartPro.functions.sideCartScroll();        
    });
}

apx_widgets.worker.sideCartPro.functions.sideCartScroll = function(){
    if($("#apx_widgets_worker-sideCartPro-content .scroll").length){
        let h = $('#apx_widgets_worker-sideCartPro-header').innerHeight() + $('#apx_widgets_worker-sideCartPro-content .table-footer').innerHeight() + $('#apx_widgets_worker-sideCartPro-footer').innerHeight();
        $('#apx_widgets_worker-sideCartPro-content .scroll').css('height','calc(100vh - ' + h + 'px');
    }
}

apx_widgets.worker.sideCartPro.functions.sideCartActions = function(html){
    $(document).on("click", "#apx_widgets_worker-sideCartPro .table-body .excluir a, #apx_widgets_worker-sideCartPro .table-body .quantidade a:not(.atualizar-quantidade), #apx_widgets_worker-sideCartPro .cupom-sucesso a", function(p) {
        p.preventDefault();
        apx_widgets.functions.blockPage(true);
        var n = $(this);
        var o = $(this).attr("href");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(q) {
            $("#carrinho-mini").load("/carrinho/mini", function() {})
        }).fail(function(q) {
            window.location = o
        }).always(function(){
            apx_widgets.functions.blockPage(false);
        })
    });

    $('#theme_header-functions > li > .carrinho > a').click(function(e){
        e.preventDefault();
        if($('#apx_widgets_worker-sideCartPro #apx_widgets_worker-sideCartPro-content').is(':empty')){
            $("#carrinho-mini").load("/carrinho/mini", function() {})
        }else{
            apx_widgets.worker.sideCartPro.functions.sideCartToggle();
        }
    })

    $('body').on('click','#apx_widgets_worker-sideCartPro [for="usarCupom"]',function(){
        $(this).next('.controls').toggle();
        apx_widgets.worker.sideCartPro.functions.sideCartScroll();
    });
}
apx_widgets.worker.sideCartPro.functions.sideCartSet = function(){
    $('body').append('<div id="apx_widgets_worker-sideCartPro-shadow"></div><div id="apx_widgets_worker-sideCartPro"><div id="apx_widgets_worker-sideCartPro-header"><button type="button" onclick="apx_widgets.worker.sideCartPro.functions.sideCartToggle()">'+ apx_widgets.worker.sideCartPro.config.iconClose +'</button><span>'+ apx_widgets.worker.sideCartPro.config.title +'</span></div><div id="apx_widgets_worker-sideCartPro-content"></div><div id="apx_widgets_worker-sideCartPro-footer"><a href="/carrinho/index" class="botao">Finalizar Compra</div></div></div>');    
}
apx_widgets.worker.sideCartPro.functions.sideCart = function(html){
    $('#apx_widgets_worker-sideCartPro-content').html(html);
    $('body').addClass('sideCart-visible');  
    apx_widgets.worker.sideCartPro.functions.sideCartScroll();  
}

apx_widgets.worker.sideCartPro.functions.sideCartToggle = function(){
    if($('#apx_widgets_worker-sideCartPro-content:empty').length){
        $("#carrinho-mini").load("/carrinho/mini", function() {});
    }
    $('body').toggleClass('sideCart-visible');
}