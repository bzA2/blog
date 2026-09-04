(($) => {
     $('article').each(function(i){
        $(this).find('img').each(function(){
        if ($(this).parent().hasClass('fancybox') || $(this).parent().is('a')) return;

        var alt = this.alt;

        if (alt) $(this).after('<span class="caption">' + alt + '</span>');

        $(this).wrap('<a href="' + this.src + '" data-fancybox=\"gallery\" data-caption="' + alt + '"></a>')
        });

        $(this).find('.fancybox').each(function(){
        $(this).attr('rel', 'article' + i);
        });
    });

    Fancybox.bind("[data-fancybox]", {})
})(jQuery)