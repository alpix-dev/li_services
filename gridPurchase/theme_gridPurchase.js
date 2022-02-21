theme.worker.gridPurchase = {};
theme.worker.gridPurchase.list = [{}];
theme.worker.gridPurchase.config = {};
theme.worker.gridPurchase.style = '<style>/* VARIANT GRADE */ .theme_worker-gridPurchase{} .theme_worker-gridPurchase > .table-responsive + div .total{font-size:26px;} .theme_worker-gridPurchase > .table-responsive + div{margin:30px 0 0 0;    display: flex;    gap: 30px;    align-items: center;    justify-content: space-between;} .theme_worker-gridPurchase td > span{display:block;margin-bottom:5px;} .theme_worker-gridPurchase td input{margin: 0 auto;    display: block;    text-align: center;} .theme_worker-gridPurchase td{vertical-align:middle;text-align:center;} .theme_worker-gridPurchase td:first-child > span[style^="border-color"]{height: 0;    width: 30px;    display: inline-block;    border-top: 30px solid #fff;    border-radius: 50%;    box-shadow: 0px 0px 2px #000;} .atributos, .principal .acoes-produto, .principal .parcelas-produto, .principal .cep{display:none!important;}</style>';
theme.worker.gridPurchase.match = ($('.pagina-produto').length > 0 && $('.atributos').length > 0);
theme.worker.gridPurchase.run = function(el){
    if($('.atributos > div').length == 1){
        let options = [];
        options.titles = [];
        options.variants = [];
        
        $('.atributos > div').each(function(index){
            let isColor = $(this).hasClass('atributo-cor') ? true : false;            
            options.variants[index] = [];            
            options.titles.push($(this).find('span > b').text().trim());
            $(this).find('ul > li').each(function(){
                let me = $(this).find('a');
                options.variants[index].push({grade : me.data('grade-id'), variantId : me.data('variacao-id'), nameOrContent : (isColor ? me.html() : me.text().trim())})
            })
        });

        let theme_worker_gridPurchase = $('<div class="theme_worker-gridPurchase"></div>');
        let table = $('<table></table>');
        let tr = $('<tr></tr>');
        for (let i = 0; i < options.variants[0].length; i++) { 
            tr.append('<th>'+ options.variants[0][i].nameOrContent +'</th>');
        }
        table.append(tr);

        tr = $('<tr></tr>');
        for (let z = 0; z < options.variants[0].length; z++) {    
            console.log(options.variants[0][z])
            tr.append('<td>' + ($('.principal .acoes-produto[data-variacao-id="'+ options.variants[0][z].variantId +'"]').length > 0 ? '<span class="price">'+ $('.principal .acoes-produto[data-variacao-id="'+ options.variants[0][z].variantId +'"] .preco-produto .titulo').first().text().trim() +'/un</span><div><button type="button">-</button><input data-variacao-id="'+ $('.principal .acoes-produto[data-variacao-id="'+ options.variants[0][z].variantId +'"]').attr('data-produto-id') +'" data-variacao-valor="'+ $('.principal .acoes-produto[data-variacao-id="'+ options.variants[0][z].variantId +'"] .preco-produto .titulo').first().text().trim() +'" type="tel" value="0" style="width:50px"/><button type="button">+</button></div>' : '<span></span>') + '</td>');
        }
        table.append(tr);
        
        table = $('<div class="table-responsive"></div>').append(table);
        theme_worker_gridPurchase.append(table);
        theme_worker_gridPurchase.append('<div><span class="total">R$ 0,00</span><button type="button" class="botao botao-comprar principal grande">Comprar</button></div>');
        theme_worker_gridPurchase.insertBefore('.atributos');       


        
        $('.theme_worker-gridPurchase input').change(function(){
            let total = 0;
            $('.theme_worker-gridPurchase input').each(function(){
                let price = parseFloat($(this).data('variacao-valor').replace('R$ ','').replace('.','').replace(',','.')) * parseInt($(this).val());
                total = total + price;                
            });    
            let formatMoney = new Intl.NumberFormat('id',{
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(total)
                            
            $('.theme_worker-gridPurchase .total').text('R$ ' + formatMoney);
        });
        console.log('theme.worker.gridPurchase--oneOption OK');    
    }else{
        let options = [];
        options.titles = [];
        options.variants = [];
        
        $('.atributos > div').each(function(index){
            let isColor = $(this).hasClass('atributo-cor') ? true : false;            
            options.variants[index] = [];            
            options.titles.push($(this).find('span > b').text().trim());
            $(this).find('ul > li').each(function(){
                let me = $(this).find('a');
                options.variants[index].push({grade : me.data('grade-id'), variantId : me.data('variacao-id'), nameOrContent : (isColor ? me.html() : me.text().trim())})
            })
        });

        let theme_worker_gridPurchase = $('<div class="theme_worker-gridPurchase"></div>');
        let table = $('<table></table>');
        let tr = $('<tr><th></th></tr>');
        for (let i = 0; i < options.variants[1].length; i++) {            
            tr.append('<th>'+ options.variants[1][i].nameOrContent +'</th>');
        }
        table.append(tr);

        for (let i = 0; i < options.variants[0].length; i++) {             
            let tr = $('<tr></tr>');
            tr.append('<td>'+ options.variants[0][i].nameOrContent +'</td>');
            for (let z = 0; z < options.variants[1].length; z++) {    
                tr.append('<td>' + ($('.principal .acoes-produto[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"]').length > 0 ? '<span class="price">'+ $('.principal .acoes-produto[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"] .preco-produto .titulo').first().text().trim() +'/un</span><div><button type="button">-</button><input data-variacao-id="'+ $('.principal .acoes-produto[data-variacao-id="'+ options.variants[0][z].variantId +'-'+ options.variants[1][z].variantId +'"]').attr('data-produto-id') +'" data-variacao-valor="'+ $('.principal .acoes-produto[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"] .preco-produto .titulo').first().text().trim() +'" type="tel" value="0" style="width:50px"/><button type="button">+</button></div>' : '<span></span>') + '</td>');
            }
            table.append(tr);
        }
        table = $('<div class="table-responsive"></div>').append(table);
        theme_worker_gridPurchase.append(table);
        theme_worker_gridPurchase.append('<div><span class="total">R$ 0,00</span><button type="button" class="botao botao-comprar principal grande">Comprar</button></div>');
        theme_worker_gridPurchase.insertBefore('.atributos');       


        
        $('.theme_worker-gridPurchase input').change(function(){
            let total = 0;
            $('.theme_worker-gridPurchase input').each(function(){
                let price = parseFloat($(this).data('variacao-valor').replace('R$ ','').replace('.','').replace(',','.')) * parseInt($(this).val());
                console.log(price);
                total = total + price;                
                console.log(total);
            });            
            $('.theme_worker-gridPurchase .total').text('R$ ' + (total.toFixed(2).toString().replace('.',',')));
        });
        console.log('theme.worker.gridPurchase--multiOption OK');            
    }

    $('.theme_worker-gridPurchase table div button').click(function(){
        let input = $(this).parent('div').find('input');
        let qtd = parseInt(input.val());
        if($(this).is(':last-child')){
            qtd = qtd + 1
        }else{
            qtd = qtd - 1
        }

        qtd < 0 ? qtd = 1 : qtd = qtd

        input.val(qtd);
        input.change();
    })

    $('.theme_worker-gridPurchase .botao-comprar').click(function(e){
        e.preventDefault();                
        let productsToAdd = [];
        let flag = true;

        $('.theme_worker-gridPurchase table div').each(function(){
            if(parseInt($(this).find('input').val()) > 0){
                productsToAdd.push("/carrinho/produto/" + $(this).find('input').attr('data-variacao-id') + "/adicionar/" + $(this).find('input').val());
            }
        })
        if(productsToAdd.length == 0){
            theme.functions.blockPage(false);
            alert('Selecione ao menos uma opção para prosseguir');
        }else{
            theme.functions.blockPage(true);
            theme.functions.gridPurchaseAjax(0,productsToAdd);
        }
                
    });
};

theme.functions.gridPurchaseAjax = function (i, calls){        
    $.get(calls[i], function(data){
    
    })
    .done(function(data){
        if(i == calls.length){
            theme.functions.blockPage(false);
            //window.location = calls[i];
            $("#theme_sideCart-content").load("/carrinho/mini", function() {
                theme.functions.sideCart()
            })
        }else{
        theme.functions.gridPurchaseAjax(i + 1, calls)        
        }
    })
    .fail(function(data){
        theme.functions.blockPage(false);
        console.log('theme.worker.gridPurchase - Err - ' + i);
    });          
};
