apx_widgets.worker.menuSeeAll = {};
apx_widgets.worker.menuSeeAll.list = [{}];
apx_widgets.worker.menuSeeAll.functions = {};
apx_widgets.worker.menuSeeAll.style = "";
apx_widgets.worker.menuSeeAll.config = {text:"Ver Todos"};
apx_widgets.worker.menuSeeAll.match = $('.menu.superior .com-filho').length > 0;
apx_widgets.worker.menuSeeAll.run = function(){
    $('.menu.superior .com-filho').each(function(){
        let url = $(this).children('a').attr('href');
        let base = $(this).find('.nivel-dois > li:first-child').clone();
        base.find('a').attr('href',url);
        base.find('a').text(apx_widgets.worker.menuSeeAll.config.text);
        $(this).find('.nivel-dois').append(base);
    });
    console.log('apx_widgets.worker.menuSeeAll OK'); 
}

