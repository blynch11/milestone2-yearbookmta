//this fucntion allows users to slide through images of the highlights of our school year
$(document).ready(function(){
        $(".next").on('click', function() {
            let visibleImg = $('.active');
            let nextImg = visibleImg.next();

            if(nextImg.length){
                visibleImg.removeClass('active').css('z-index', '-1');
                nextImg.addClass('active').css('z-index', 1);
            }
        });
        
        $(".previous").on('click', function(){
            let visibleImg = $('.active');
            let prevImg = visibleImg.prev();

            if(prevImg.length) {
                visibleImg.removeClass('active').css('z-index', '-1');
                prevImg.addClass('active').css('z-index', 1);
            }
        });
});
