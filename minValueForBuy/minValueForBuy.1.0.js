apx_widgets.worker.minValueForBuy = {};
apx_widgets.worker.minValueForBuy.list = [{}];
apx_widgets.worker.minValueForBuy.functions = {};
apx_widgets.worker.minValueForBuy.style = "<style>.apx_widgets_worker-minValueForBuy-button{margin-bottom:15px;}</style>";
apx_widgets.worker.minValueForBuy.config = {alert:"O valor mínimo para finalizar a compra é de R$2000. Adicione mais produtos ao carrinho", min_value:2000};
apx_widgets.worker.minValueForBuy.match = $('.pagina-carrinho').length > 0;
apx_widgets.worker.minValueForBuy.run = function(){
    let subtotal = $('.carrinho-checkout').length > 0 ? parseFloat($('[data-subtotal]').attr('data-float')) : parseFloat($('[data-subtotal-valor]').attr('data-subtotal-valor'));
    
    console.log(subtotal);
    if(apx_widgets.worker.minValueForBuy.config.min_value > subtotal){
        if($('.carrinho-checkout').length > 0){
            $('#formas-pagamento-wrapper').empty();
            $('#formas-pagamento-wrapper').append('<div class="alert alert-info">'+ apx_widgets.worker.minValueForBuy.config.alert +'</div><a class="btn btn-success" href="/">Continuar Comprando</a>')
        }else{
            $('.acao-editar .botao.principal.grande').remove();
            $('h1.titulo').after('<div class="alert alert-info">'+ apx_widgets.worker.minValueForBuy.config.alert +'</div><a class="btn btn-success apx_widgets_worker-minValueForBuy-button" href="/">Continuar Comprando</a>')
        }
        
    }

    console.log('apx_widgets.worker.minValueForBuy OK');     
    
}

