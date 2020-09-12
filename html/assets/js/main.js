$(document).ready(function(){
    
// $(".main").onepage_scroll({
//         sectionContainer: "section",
//         easing: "linear",
//         updateURL: false,
//         animationTime: 500,  
//         responsiveFallback: false,
//         loop: false,
//         beforeMove: function(index) {
//             $('.section [data-aos]').each(function(){
//                 $(this).removeClass("aos-animate");
//                 $(".section .section_bg").removeClass("animate");
//             });

//         },
//         afterMove: function(index) {
//             $('.section [data-aos]').each(function(){
//                 $(this).removeClass("aos-animate");
//                 $(".section .section_bg").removeClass("animate");
//             });

//             $('.section.active [data-aos]').each(function(){
//                 $(this).addClass("aos-animate");
//                 $(".section.active .section_bg").addClass("animate");
//             });
//         }
//       });

    // videojs('bg-video').Background({
    //     volume: '0',
    //     mediaType: 'html5',
    //     autoPlay: 'false'
    // });
    
    
    // $(".banner__inner__down").click(() =>{
    //     $(".main").moveTo(2);
    // });

    $(".header__inner__hamburger__menu").click(() =>{
        $(".header").addClass("inactive");
        $(".nav,.backdrop,body").addClass("open");

        $('body').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
          })
    });

    $(".backdrop,.nav__close").click(() =>{
        $(".header").removeClass("inactive");
        $(".nav,.backdrop,body").removeClass("open");

        $('body').on('scroll touchmove mousewheel', function(e){
            $(this).unbind();
            return true;
        })
    });


   
    //   theG0disdevel0per
});