 var disableElementsPolyfill = function(){  
  if(navigator.appName == 'Microsoft Internet Explorer'){
    var agent = navigator.userAgent;
    var mouseover = function(e){
      if ($(this).attr('disabled')){
        return;
      }
      if($(this).css('pointer-events') == 'none'){
        $(this).attr('disabled', true);
        $(this).data('disabledByPolyfill', true)
      }
      $(this).unbind('mouseover');
    };
          
    var mouseleave = function(e){
      if($(this).data('disabledByPolyfill')){
        $(this).attr('disabled', false);
        $(this).data('disabledByPolyfill', false)
      }
      $(this).on('mouseover', '*', mouseover);
    };
          
    if (agent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/) != null){
      var version = parseFloat( RegExp.$1 );
      if(version < 11){                
        $(document).on('mouseover', '*', mouseover);
        $(document).on('mouseleave', '*', mouseleave);
      }
    }
  }
};