const apx_widgets = {}
apx_widgets.functions = [];
apx_widgets.scripts = [];

apx_widgets.worker = {};
apx_widgets.worker.run = function(){
    let starterCSS = document.createElement('link');
    starterCSS.href = "https://cdn.jsdelivr.net/gh/alpix-dev/li_resources/apx_starter.css";
    starterCSS.type = "text/css";
    starterCSS.rel = "stylesheet";
    document.head.append(starterCSS);
    $.each(apx_widgets.worker, function(k, item){
        if(k != "run"){
            if(apx_widgets.worker[k].style !== undefined){
                $('head').append(apx_widgets.worker[k].style);
            }
            if(apx_widgets.worker[k].list.length > 0 && apx_widgets.worker[k].match){
                apx_widgets.worker[k].run();
            }            
        }        
    });
};

apx_widgets.functions.blockPage = function (status){
    if(status){
        $('body').append('<div id="apx_loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
    }else{
        $('#apx_loader').remove();
    }   
};

apx_widgets.functions.hideThisSku = function(skuToHide){
    if($('.principal [itemprop="sku"]').length > 0){
        if($('.principal [itemprop="sku"]').text().indexOf(skuToHide) >= 0){
            window.location = "/";
        }
    }
    if($('.listagem-item').length > 0){
        $('.listagem-item .produto-sku').each(function(){
            if($(this).text().indexOf(skuToHide) >= 0){
                $(this).closest('.listagem-item').remove();
            }
        })
    }
    if($('.carrinho-interno-ajax').length > 0){
        $('.carrinho-interno-ajax .produto-sku').each(function(){
            if($(this).text().indexOf(skuToHide) >= 0){
                $(this).closest('li').remove();
            }
        })
    }

}

apx_widgets.functions.createField = function (oObj){
    let field = $('<div class="theme-customInputElement"></div>');    
    field.append('<label>'+oObj.label+'</label>');
    
    if("text,number,password,tel,email,date,color".split(',').includes(oObj.type)){
        field.append('<input type="'+ oObj.type +'" name="theme_field-'+ oObj.id +'"/>');
    }
    if(oObj.type == "textarea"){
        field.append('<textarea rows="4" name="theme_field-'+ oObj.id +'"></textarea>');
    }
    if(oObj.type == "select"){
        let select = $('<select name="theme_field-'+ oObj.id +'"></select>');
        $.each(oObj.list, function(list_, list_value){
            select.append('<option value="'+list_value+'">'+list_value+'</option>');
        });
        field.append(select);
    }
    if(oObj.type == "boolean"){
        let select = $('<select name="theme_field-'+ oObj.id +'"></select>');
        select.append('<option value="true">Sim</option>');
        select.append('<option value="false">Não</option>');
        field.append(select);
    }
    return field;

};

apx_widgets.functions.related = function(){
    $('[alt="Logomarca Loja Integrada"]').closest('a').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');
    $('a[title="Loja Integrada"]').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');
    $('a[title="Loja Integrada - Plataforma de loja virtual."]').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');        
    $('.creditos.plataforma').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');   
}

document.addEventListener("DOMContentLoaded", function() {apx_widgets.functions.related();});
window.addEventListener('load', function(event) {apx_widgets.functions.related();});



let script2 = document.createElement('script');
script2.src = "https://cdn.jsdelivr.net/gh/alpix-dev/li_services/categorySlider/sideCartPro.1.0.js"
document.head.append(script2);
script2.onload = function() {
    apx_widgets.worker.categorySlider.config.categories_select = 'list'; 
	apx_widgets.worker.categorySlider.config.withImages = true;
    apx_widgets.worker.categorySlider.config.sliderSettings.perView = 5;
    apx_widgets.worker.categorySlider.config.sliderSettings.autoplay = 0;
    apx_widgets.worker.categorySlider.config.sliderSettings.breakpoints[800].perView = 2;
    apx_widgets.worker.categorySlider.config.sliderSettings.breakpoints[800].autoplay = 3000;
	//apx_widgets.worker.categorySlider.config.sliderSettings.breakpoints[800].focusAt = 'center';
    apx_widgets.worker.categorySlider.list = [];    
    apx_widgets.worker.categorySlider.list.push({title: '<b>Frete Grátis</b>Consulte condições', url:'', img: 'http://127.0.0.1:5501/1.jpeg'});
    apx_widgets.worker.categorySlider.list.push({title: '<b>5% OFF no PIX</b>10x sem juros no cartão', url:'', img: 'http://127.0.0.1:5501/2.jpeg'});
    apx_widgets.worker.categorySlider.list.push({title: '<b>Compra Segura</b>Site protegido e certificado', url:'', img: 'http://127.0.0.1:5501/3.jpeg'});
    apx_widgets.worker.categorySlider.list.push({title: '<b>De SC para você</b>Enviamos para todo o Brasil', url:'', img: 'http://127.0.0.1:5501/4.jpeg'});
    apx_widgets.worker.categorySlider.list.push({title: '<b>1ª Troca Grátis</b>Consulte nossa política', url:'', img: 'http://127.0.0.1:5501/5.jpeg'});
	    
    apx_widgets.worker.run();
    console.log('script loaded');        
};

let customCSS = document.createElement('link');
customCSS.href = "http://127.0.0.1:5501/install.css";
customCSS.type = "text/css";
customCSS.rel = "stylesheet";
document.head.append(customCSS);






