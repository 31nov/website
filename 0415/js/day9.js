jQuery(function($){
    var boo = true;
    var $box = $('#box');
    var endLeft2 = 0;
    var endTop2 = 0;
    
    $(this).on('click', function(event){
        
//        if(boo == true){
//            $box.css('background', 'red');
//            boo = false;
//        }else{
//            $box.css('background', 'blue');
//            boo = true;
//        }
    });
    $(".dragndrop").on('mouseover',function(event){
        endLeft2 = parseInt($(this).css('left'));
        endTop2 = parseInt($(this).css('top'));
    });
    $(".dragndrop").on('mousedown', function(event){
        event.preventDefault();
        var startX = event.pageX;
        var startY = event.pageY;
        
        var $this = $(this);
        var startLeft = parseInt($this.css('left'));
        var startTop = parseInt($this.css('top'));/*$this.position().top;*/
    
        if(isNaN(startLeft)) startLeft = 0;
        if(isNaN(startTop)) startTop = 0;
        
            var $dragndrop = $this.css('position'); 
            if( $dragndrop != 'absolute' && $dragndrop != 'relative' && $dragndrop != 'fixed'){ 
                $this.css('position','relative');
            }
        $(document).on('mousemove.dragndrop',function(event){
            var endLeft = event.pageX-startX+startLeft; 
            var endTop = event.pageY-startY+startTop;
            
            $this.css('left',endLeft);
            $this.css('top',endTop);
            
        });
        $(document).on('mouseup.dragndrop',function(event){
            if(event.shiftKey == true){
                $this.css('left',endLeft2);   
                $this.css('top',endTop2);   
            }
            $(document).off('.dragndrop');
        });
    });
    



});
