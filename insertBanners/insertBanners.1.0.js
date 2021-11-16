apx_widgets.worker.insertBanners = {};
apx_widgets.worker.insertBanners.list = [];
//apx_widgets.worker.insertBanners.list.push({target:'Posição',position:2,title:'',images:[{url:'https://cdn.awsli.com.br/1984/1984900/arquivos/585x200_a.png', link:'#'},{url:'https://cdn.awsli.com.br/1984/1984900/arquivos/585x200_a.png', link:''},{url:'https://cdn.awsli.com.br/1984/1984900/arquivos/585x200_a.png', link:''},{url:'https://cdn.awsli.com.br/1984/1984900/arquivos/585x200_a.png', link:''}]});
apx_widgets.worker.insertBanners.functions = {};
apx_widgets.worker.insertBanners.style = "";
apx_widgets.worker.insertBanners.config = {};
apx_widgets.worker.insertBanners.match = 1 == 1;
apx_widgets.worker.insertBanners.run = function(){
    $.each(apx_widgets.worker.insertBanners.list, function(k, item){
        let targetSelector = null;
        switch (item.target){
            case 'Lançamento':
                targetSelector = $('.vitrine-lancamento + ul');
                break;
            case 'Mais Vendidos':
                targetSelector = $('.vitrine-mais-vendidos + ul');
            break;
            case 'Posição':
                targetSelector = $('.pagina-inicial #listagemProdutos > ul').eq(item.position - 1);
            break; 
        }
         
        if(targetSelector.length == 1 && item.images.length > 0){
            let columns = 12/item.images.length;
            let row = $('<div class="row-fluid"></div>');
            $.each(item.images,function(k2, image){
                row.append('<div class="span'+ columns+'"><a href="'+ image.link +'"><img src="'+ image.url +'"/></a></div>');
            });
            targetSelector.after(row);
        }
    })  
}

