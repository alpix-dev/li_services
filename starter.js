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

// //.!77!        ~777.         !7777:         ~7777777!~^.      !7777777!~:    :?77!.      .7777.   
//    //~@@@&:      .&@@@!        Y@@@@@#:       .#@@@@@@@@@@#Y:   ^@@@@@@@@@@&B?. :#@@@P.    .B@@@P.   
//    //~@@@&:      .#@@@!       !@@@G@@@G       .#@@@J~~~?B@@@#:  ~@@@&!~~!J&@@@P  .G@@@P   .G@@@Y     
//    //~@@@&.       #@@@!      :&@@P P@@@J      .#@@@7    :&@@@?  ~@@@&:    7@@@@^  .G@@@P .G@@@J      
//    //~@@@@YJJJJJJJ&@@@!      G@@&: :#@@@!     .#@@@!    !@@@@!  ~@@@&.    Y@@@#.   .5@@@Y5@@@?       
//    //~@@@@@@@@@@@@@@@@!     Y@@@7   !@@@#:    .#@@@PJJYG@@@@J   ~@@@@YJJ5B@@@#!      Y@@@@@@7        
//    //~@@@&7!!!!!!7&@@@!    !@@@G~~~~^G@@@G    .#@@@@@@@&#GJ^    ~@@@@@@@@&BP7.        Y@@@@7         
//    //~@@@&.      .#@@@!   :&@@@@@@@@@@@@@@J   .#@@@?:^::.       ~@@@&~:::.            ~@@@#.         
//    //~@@@&:      .#@@@!   G@@@J~~~~~~~?@@@@!  .#@@@7            ~@@@&:                ~@@@&.         
//    //~@@@@:      .&@@@!  Y@@@P         Y@@@&: .#@@@7            ~@@@@:                !@@@&:         
//    //.?YY?.       7YYJ:  ?YYJ.         .?YYY^  7YYJ:            .?YY?.                :JYY?.         
//     //~777!:       ^77~        .^!?JJJJ7!^.     :777~       .!77!:       ^777: .JG#&&&&BP?:          
//    //~@@@@@&?      G@@&:     ~5#@@@@@@@@@@#Y:   ~@@@@!      J@@@@P      .#@@@^ .BG5JJYB@@@&!         
//    //!@@@&@@@J     G@@&:   .5@@@&Y!^:^~?B@@@&!   5@@@G     :&@@@@@!     ?@@@5          J@@@#.        
//    //!@@@Y5@@@5    G@@&:   5@@@B:        5@@@&:  :&@@@!    Y@@@@@@G    .#@@&:          7@@@#.        
//    //!@@@Y 5@@@P.  G@@&:  ^@@@@!         :&@@@J   J@@@G   :&@@JP@@@!   ?@@@J       ^!!Y&@@&!         
//    //!@@@Y  5@@@G: G@@&:  !@@@&:         .B@@@Y   .#@@@~  Y@@#.^@@@B. .#@@#.      .#@@@BP?:          
//    //!@@@Y   Y@@@B:G@@&:  !@@@@~         .&@@@?    7@@@G ^&@@?  5@@@7 7@@@7       .#@@#.             
//    //!@@@Y    ?@@@BB@@&:  .#@@@5         J@@@&:     B@@@~Y@@#.  ^&@@#:B@@G         ?557              
//    //!@@@Y     7@@@@@@&:   !@@@@P~.. ..~5@@@&!      !@@@B&@@?    Y@@@B@@@~         !JJ7.             
//    //!@@@5      7&@@@@&:    ^P&@@@&###&@@@#Y:        P@@@@@#.    :&@@@@@5         ~@@@@!             
//    //:YYY~       ^JYYY7       :!J5PGGGPY?~.          :JYYYY~      ~YYYYJ.         .YGGY: 

apx_widgets.functions.related = function(){
    setTimeout(() => {
        $('a[title="Loja Integrada - Plataforma de loja virtual."]').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');        
    }, "1000");    
}

document.addEventListener("DOMContentLoaded", function() {apx_widgets.functions.related();});
window.addEventListener('load', function(event) {apx_widgets.functions.related();});

