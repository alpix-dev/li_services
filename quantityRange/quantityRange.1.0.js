apx_widgets.worker.quantityRange = {};
apx_widgets.worker.quantityRange.list = [];
apx_widgets.worker.quantityRange.config = {};
apx_widgets.worker.quantityRange.style = '<style>.apx_avisoQtd{font-size: 11px;margin: -15px auto 5px auto;background: #f9d13c;width: fit-content;padding: 0 3px;border-radius: 3px;color: #000;}</style>';
apx_widgets.worker.quantityRange.match = $('.pagina-carrinho:not(.carrinho-checkout)').length > 0;
//apx_widgets.worker.quantityRange.list.push({sku : "FGGYJHTL2",min: 3, max: 5});
apx_widgets.worker.quantityRange.run = function(el){
    $('tr[data-produto-id]').each(function(){
        let sku = $(this).find('.produto-info > ul > li:first-child > span > strong').text().trim();
        let findSku = apx_widgets.worker.quantityRange.list.find(el => el.sku.toLowerCase().trim() === sku.toLowerCase().trim());
        if(findSku){
            let min = findSku.min !== undefined && findSku.min != "" ? findSku.min : 0;
            let max = findSku.max !== undefined && findSku.max != "" ? findSku.max : 9999;
            let input = $(this).find('[name="quantidade"]');
            let url = input.closest('form').attr('action');
            input.attr('title','Quantidade Mínima: ' + min + ' - Quantidade Máxima: ' + max);
            
            if(min > 0){input.attr('apx_min', min)}
            if(max > 0){input.attr('apx_max', max)}

            if(input.val() < min){
                input.val(min);
                input.closest('form').submit();
            }
            if(input.val() > max){
                input.val(max);
                input.closest('form').submit();
            }
            if(input.val() <= min){
                $('<p class="apx_avisoQtd">Qtd. Min.: ' + min + '</p>').insertBefore(input.parent());
                input.prev('a').attr('href',url + '/' + min);
            }
            if(input.val() >= max){
                $('<p class="apx_avisoQtd">Qtd. Máx.: ' + max + '</p>').insertBefore(input.parent());
                input.next('a').attr('href',url + '/' + max);
            }
        }
    })
};
