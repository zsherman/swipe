(function ($) { 
$.fn.insertAtIndex = function(index,selector){
    var opts = $.extend({
        index: 0,
        selector: '<div/>'
    }, {index: index, selector: selector});
    return this.each(function() {
        var p = $(this);  
        var i = ($.isNumeric(opts.index) ? parseInt(opts.index) : 0);
        if(i <= 0)
            p.prepend(opts.selector);
        else if( i > p.children().length-1 )
            p.append(opts.selector);
        else
            p.children().eq(i).before(opts.selector);       
    });
};  
})( jQuery );