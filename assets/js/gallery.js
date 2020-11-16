 $(document).ready(function(){
        $(".next").on('click', function(){
            var visibleImg = $('.active');
            var nextImg = visibleImg.next();


        if(nextImg.length){
            visibleImg.removeClass('active').css('z-index', '-1');
            nextImg.addClass('active').css('z-index', 1);
        }
        });
        
        $(".previous").on('click', function(){
            var visibleImg = $('.active');
            var prevImg = visibleImg.prev();


        if(prevImg.length){
            visibleImg.removeClass('active').css('z-index', '-1');
            prevImg.addClass('active').css('z-index', 1);
        }
        });


    });