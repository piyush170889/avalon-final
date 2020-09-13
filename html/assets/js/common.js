
$("#modal_1").click(function () {
    $('#myModal4').modal('show');
    console.log("hello");
});

$("#modal_2").click(function () {
    $('#fake_modal').click();
    console.log("hii");
    return false;
});



var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phone_val = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
var numeric_val = /^\d+$/;
var alphanumeric_val = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
var date_val = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
var regExp = /[A-Za-z0-9_~\-!@#\$%\^&\*\(\)]+$/i;
var regExpnumbers = "/[0-9]/g;";
var whitespaces_val = /^\s+$/;
var alphaspace = /^[a-zA-Z ]*$/;

$(document).ready(function ($) {
    $("#openNav").css('cursor', 'pointer').click(function () {
        $("#navigatonBar").slideDown(500);
        $("#openNav").fadeOut(1000, function () {
            $("#closeNav").show();
        });
    });
    $("#closeNav").css('cursor', 'pointer').click(function () {
        $("#navigatonBar").slideUp(500);
        $("#closeNav").fadeOut(1000, function () {
            $("#openNav").show();
        });
    });
    $(".navBar li").css('cursor', 'pointer').click(function (event) {
        $('.navBar li').removeClass('li_active');
        $(this).addClass('li_active');
    });
    setClickEventOnTabs();
    $("#getintouchcccode option[value='+91']").prop('selected', true);
    $("#planfeedcc option[value='+91']").prop('selected', true);

    var hideParent = $(".planunderline .plan_span").html();

    //    console.log(hideParent);
});

function setClickEventOnTabs() {
    $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
}

function initializeAll() {

    //    This is for feature product {gallery}
    var interior_slider_1 = $("#interior-slider_1,#interior-slider_3,#interior-slider_4");

    interior_slider_1.owlCarousel({
        nav: true,
        items: 4,
        margin: 25,
        loop: true,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            554: {
                items: 2,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            991: {
                items: 4,
                nav: true,
            }
        }
    });

    $("#interior-slider_1 .owl-prev,#interior-slider_3 .owl-prev,#interior-slider_4 .owl-prev").html('<img src="assets/images/gallery/left_arrow.png" class="arrows">');
    $("#interior-slider_1 .owl-next,#interior-slider_3 .owl-next,#interior-slider_4 .owl-next").html('<img src="assets/images/gallery/right_arrow.png" class="arrows">');

    var interior_slider_2 = $("#interior-slider_2");
    interior_slider_2.owlCarousel({
        items: 4,
        margin: 25,
        loop: true,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        mouseDrag: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            554: {
                items: 2,
                dots: true
            },
            600: {
                items: 3,
                dots: true
            },
            991: {
                items: 4,
                dots: true
            }
        }
    });

    $("#interior-slider_2 .owl-prev").html('<img src="assets/images/gallery/left_arrow.png" class="arrows">');
    $("#interior-slider_2 .owl-next").html('<img src="assets/images/gallery/right_arrow.png" class="arrows">');


    var gallery_slider1_modal = $(".gallery-slider-modal");
    gallery_slider1_modal.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: false,
        // animateOut: 'fadeOut', 
        autoplayTimeout: 3000,
        nav: true,
        dots: false
    });

    $(".gallery-slider-modal .owl-prev").html('<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>');
    $(".gallery-slider-modal .owl-next").html('<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>');

    $(".card-img-top").on("click", function () {
        var slider_id = $(this).attr('data-id');

        if (!validateblanktext(slider_id)) {
            return false;
        }

        $("." + slider_id).show();
    });

    $(".modalCloseBtn").click(function () {
        $(".gallery-slider1-modal").hide();
    });

    $(".gallery-slider1-modal").click(function (event) {
        var target = $(event.target);
        var term_modalmodal = $(this);

        if (target.hasClass("gallery-slider1-modal")) {
            $(this).hide();
        }
    });


    var banner_slider = $("#top_slider");
    banner_slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        smartSpeed: 150,
        dots: true,
        nav: true,
        mouseDrag: true
    });

    $("#top_slider .owl-prev").html('<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>');
    $("#top_slider .owl-next").html('<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>');

    $(".desktop_nav").click(function () {
        $("#navigatonBar").slideToggle();
        $(this).toggleClass("open");
    });
}

var webnavoperation = [closeWebNav, openWebNav];

function closeWebNav() {
    $("#navigatonBar").slideUp(200);
}

function openWebNav() {
    $("#navigatonBar").slideDown(200);
}
$('#nav-icon3').click(function (e) {
    e.preventDefault();
    webnavoperation.reverse()[0]();
});

function showvideo() {
    $("#youtube_video_popup iframe").css("width", "100%");
    $("#youtube_video_popup iframe").css("height", "450px");
}
$("#youtube_video_popup").on('hidden.bs.modal', function (e) {
    $("iframe").each(function () {
        var src = $(this).attr('src');
        $(this).attr('src', src);
    });
});

function openmobNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closemobNav() {
    document.getElementById("mySidenav").style.width = "0";
}
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
$(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {
        $('.modal').modal('hide');
    }
});

function submitfeedForm(name, email, cc, mobile, msg, pdf) {
    if (name == null || name == '' || email == null || email == '' || mobile == null || mobile == '' || msg == null || msg == '') {
        $("#failedemptyfeed").css("display", "block");
    } else {
        if (!isValidEmailAddresscn(email)) {
            $("#failedemailfeed").css("display", "block");
        } else {
            var form = $('#formfeed')[0];
            var formData = new FormData(form);
            formData.append('pdf', pdf);

            $('#formfeed')[0].reset();
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: '/panchshiltowers/admin/Controller/feedController.php',
                data: formData,
                contentType: false,
                processData: false,
                async: false,
                success: function (data) {
                    $("#successfeed").css("display", "block");
                    location.href = "/panchshiltowers/thank-you-download-brochure.html";
                },
                error: function (data) {
                    $(".alert-danger").show();
                    $("#error-msg").text('Error in updating Sustain Details !!!');
                    setTimeout(function () {
                        $(".alert-danger").hide();
                    }, 10000);

                }
            });
        }
    }
}

function isValidEmailAddresscn(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function checkInput(e) {
    var pattern = /^[a-z]+$/i;
    return pattern.test(e);
}

function hidefeederr() {
    $("#failedfeed").css("display", "none");
    $("#failedemailfeed").css("display", "none");
    $("#failedemptyfeed").css("display", "none");
    $("#successfeed").css("display", "none");
    $("#mobileerrfeed").css("display", "none");
    $("#failednamefeed").css("display", "none");
}

function submitfooterForm(name, email, mobile, msg) {
    if (name == null || name == '' || email == null || email == '' || mobile == null || mobile == '' || msg == null || msg == '') {
        $("#failedemptymsg").css("display", "block");
    } else {
        if (!checkInputft(name)) {
            $("#failednamemsg").css("display", "block");
        } else {
            if (mobile.length < 10 || mobile.length > 10) {
                $("#mobileerrmsg").css("display", "block");
            } else {
                if (!isValidEmailAddressft(email)) {
                    $("#failedemailmsg").css("display", "block");
                } else {
                    var form = $('#footerForm')[0];
                    var formData = new FormData(form);
                    $.ajax({
                        type: 'post',
                        dataType: 'json',
                        url: '/panchshiltowers/admin/Controller/contactUsFormController.php',
                        data: formData,
                        contentType: false,
                        processData: false,
                        async: false,
                        beforeSend: function () { $("form")[0].reset(); },
                        success: function (data) {

                            if (data.errCode == 24) {
                                $("#successmsg").css("display", "block");
                                window.open('/panchshiltowers/images/uploads/".$getbrochureDetails[0]["file"]; ?>', '_blank');
                            } else {
                                $("#failedmsg").css("display", "block");
                            }
                        },
                        error: function (data) {
                            $(".alert-danger").show();
                            $("#error-msg").text('Error in updating Sustain Details !!!');
                            setTimeout(function () {
                                $(".alert-danger").hide();
                            }, 10000);


                        }
                    });
                }
            }
        }
    }
}

function checkInputft(e) {
    var pattern = /^[a-z]+$/i;
    return pattern.test(e);
}

function isValidEmailAddressft(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

function hideerrft() {
    $("#failedmsg").css("display", "none");
    $("#failedemailmsg").css("display", "none");
    $("#failedemptymsg").css("display", "none");
    $("#successmsg").css("display", "none");
    $("#mobileerrmsg").css("display", "none");
    $("#failednamemsg").css("display", "none");
}
$(function () {
    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 1000,
        threshold: 0
    });
});
$(".mapicons .map-block").click(function (event) {
    event.preventDefault();
    $(this).addClass("mapcurrent");
    $(this).siblings().removeClass("mapcurrent");
});
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
$(document).ready(function () {
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
    });
});

function refreshmap(e) {
    $("#maploading").fadeIn();
    $("#map").html(e);
    setTimeout(function () {
        $("#maploading").fadeOut();
    }, 1200);
}
$('iframe').attr('id', 'video');
var src = $('.homevideo iframe').attr('src');
var newsrc = src + "?autoplay=0&enablejsapi=1";
$('.homevideo iframe').attr('src', newsrc);
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': function (event) {
                switch (event.data) {
                    case -1:
                        console.log('unstarted');
                        break;
                    case 0:
                        console.log('ended');
                        $(".homevideo .headSection").css("display", "block");
                        $(".homevideo iframe").css("display", "none");
                        break;
                    case 1:
                        console.log('playing');
                        break;
                    case 2:
                        console.log('paused');
                        break;
                    case 3:
                        console.log('buffering');
                        break;
                    case 5:
                        console.log('video cued');
                        break;
                }
            }
        }
    });
}

function validatestring(stringtext) {
    if (stringtext == "" || whitespaces_val.test(stringtext) || numeric_val.test(stringtext) || alphanumeric_val.test(stringtext) || !alphaspace.test(stringtext)) {
        return false;
    } else {
        return true;
    }
}

function validateblanktext(stringtext) {
    if (stringtext == "" || whitespaces_val.test(stringtext)) {
        return false;
    } else {
        return true;
    }
}

function onPlayerReady(event) {
    $("#playvideo").click(function () {
        $(".homevideo .headSection").css("display", "none");
        $(".homevideo iframe").css("display", "block");
        player.playVideo();
    });
}
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
    $(".homevideo .headSection").css("display", "block");
    $(".homevideo iframe").css("display", "none");
}
// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
