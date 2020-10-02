function popup_modal() {
    $('#pt_roadblock').modal('show');
    $('#pt_roadblock .modal-body .modal_img').click(function () {
        $('#pt_roadblock').modal('hide');
    });
}

function submitgetintouchForm(name, email, mobile, msg, featureName = '') {
    if (name == null || name == '' || email == null || email == '' || mobile == null || mobile == '' || msg == null || msg == '') {
        $("#failedempty").css("display", "block");
    }
    else {
        if (!isValidEmailAddress(email)) {
            $("#failedemail").css("display", "block");
        }
        else {
            var formData = {
                feature_name: featureName,
                name: name,
                email: email,
                mobile: mobile,
                query: msg
            };
            $('#getintouchForm')[0].reset();
            let contactApi = baseUrl + 'contact';
            $.ajax({
                type: 'post'
                , dataType: 'json'
                , url: contactApi
                , data: JSON.stringify(formData)
                , contentType: 'application/json'
                , processData: false
                , async: false
                , beforeSend: function () {
                    $("form")[0].reset();
                }
                , success: function (data) {
                    $("#success").css("display", "block");
                }
                , error: function (data) {
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

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

function checkInput(e) {
    var pattern = /^[a-z]+$/i;
    return pattern.test(e);
}

function hideerr() {
    $("#failed").css("display", "none");
    $("#failedemail").css("display", "none");
    $("#failedempty").css("display", "none");
    $("#success").css("display", "none");
    $("#mobileerr").css("display", "none")
    $("#failedname").css("display", "none");
}
//$(".enquiry_floating_btn").click(function (e) {
//    $("html").animate({
//        scrollTop: $(".form_bg ").offset().top 
//    }, 1500);
//});
$("#pop-up-form-submit-otp").click(function (e) {
    e.preventDefault();
    var formdata = $("#pop-up-form-phone").serialize();
    $.ajax({
        type: "post"
        , data: formdata
        , url: "/panchshiltowers/validateotp.php"
        , success: function (data) {
            var data = $.trim(data);
            if (data == "Enter OTP is not valid") {
                $("#phonecall_number").hide();
                $("#otp-section").show();
                $("#otp_alert").show();
                $("#otp_alert").removeClass("alert-info");
                $("#otp_alert").addClass("alert-danger");
                $("#otp_alert").html("PLEASE! ENTER VALID OTP");
            }
            if (data == "This otp is expired,Submit your number to get new otp") {
                $("#phonecall_number").hide();
                $("#otp-section").show();
                $("#otp_alert").show();
                $("#otp_alert").removeClass("alert-info ");
                $("#otp_alert").addClass("alert-danger");
                $("#otp_alert").html("THIS OTP IS EXPIRED. PLEASE TRY AGIAN");
                $("#pop-up-form-submit-otp").hide();
                $("#try-again").show();
            }
            if (data == "Not matched") {
                $("#phonecall_number").hide();
                $("#otp-section").show();
                $("#otp_alert").show();
                $("#otp_alert").removeClass("alert-info ");
                $("#otp_alert").addClass("alert-danger");
                $("#otp_alert").html("OTP DO NOT MATCHED");
            }
            if (data == "success") {
                $("#phonecall_number").hide();
                $("#otp-section").hide();
                $("#pop-up-form-submit-otp").hide();
                $("#otp_alert").show();
                $("#otp_alert").removeClass("alert-info alert-danger");
                $("#otp_alert").addClass("alert-succes");
                $("#otp_alert").html("YOU WILL NOW RECEIVE A CALL FROM PANCHSHIL REALTY.");
                $("#pop-up-form-phone")[0].reset();
                $(".afterotp").fadeIn();
                setTimeout(function () {
                    window.location.href = '/panchshiltowers/thank-you-form-submission.html';
                }, 1500);
            }
        }
    });
});
$("#try-again").click(function (e) {
    e.preventDefault();
    $("#pop-up-form-phone")[0].reset();
    $("#phonecall_number").show();
    $("#otp-section").hide();
    $("#otp_alert").hide();
});
$("#pop-up-form-submit-phone").click(function (e) {
    e.preventDefault();
    var formdata = $("#pop-up-form-phone").serialize();
    $.ajax({
        type: "post"
        , data: formdata
        , url: "/panchshiltowers/sendotp.php"
        , success: function (answer_from_actionpage) {
            var answer_from_actionpage = $.trim(answer_from_actionpage);
            if (answer_from_actionpage == "Mobile number is invalid") {
                $("#otp_alert").show();
                $("#otp_alert").removeClass("alert-info ");
                $("#otp_alert").addClass("alert-danger");
                $("#otp_alert").html(answer_from_actionpage);
            }
            if (answer_from_actionpage == "show_otp") {
                $("#otp").focus();
                $("#pop-up-form-submit-phone").hide();
                $("#pop-up-form-submit-otp").show();
                $("#phonecall_number").hide();
                $("#otp-section").show();
                $("#otp_alert").show();
                $("#otp_alert").removeClass("alert-danger");
                $("#otp_alert").addClass("alert-info");
                $("#otp_alert").html("Enter OTP");
            }
        }
    });
});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var today = new Date();
var expire = new Date();
expire.setTime(today.getTime() + 3600000 * 24 * -1);
var user_visit = getCookie("visited_status");
if (user_visit == "") { }
$(".accept-container").click(function () {
    setTimeout(function () {
        $(".disclaimer-modal").hide();
    }, 1000);
});
$(".banner-jump-cursor img").click(function () {
    $('html, body').animate({
        scrollTop: $(".land-here").offset().top
    }, 1000);
});


// var tag = document.createElement('script');
// tag.id = 'iframe-demo';
// tag.src = 'https://www.youtube.com/iframe_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('myVideoClass', {
        events: {
            playerVars: {
                rel: 0
                , showinfo: 0
                , fs: 0
            }
            , 'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    var pauseButton = document.getElementById("stop_video");
    var playButton = document.getElementById("play_video");
    playButton.addEventListener("click", function () {
        player.playVideo();
        console.log("play");
    });
    pauseButton.addEventListener("click", function () {
        player.pauseVideo();
        console.log("stop");
    });
}
$(".paly_button img").click(function () {
    $(".video_block").addClass("show_video");
});
$(".videoCloseBtn").click(function () {
    $(".video_block").removeClass("show_video");
});



$('.videoModalTriger').click(function () {
    var theModal = $(this).data("target");
    var videoSRC = $(this).attr("data-videoModal");
    var videoSRCauto = videoSRC + "?autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal).on('hidden.bs.modal', function (e) {
        $(theModal + ' iframe').attr('src', '');
    });
});

function submitfooterFormplan(name, email, cc, mobile, msg, pdf) {
    $("#failedfeedplan").css("display", "none");
    $("#failedemailfeedplan").css("display", "none");
    $("#failedemptyfeedplan").css("display", "none");
    $("#successfeedplan").css("display", "none");
    $("#mobileerrfeedplan").css("display", "none");
    $("#failednamefeedplan").css("display", "none");
    if (name == null || name == '' || email == null || email == '' || mobile == null || mobile == '' || msg == null || msg == '') {
        $("#failedemptyfeedplan").css("display", "block");
    }
    else {
        if (mobile.length < 10 || mobile.length > 10) {
            $("#mobileerrfeedplan").css("display", "block");
        }
        else {
            if (!isValidEmailAddressft(email)) {
                $("#failedemptyfeedplan").css("display", "block");
            }
            else {
                var form = $('#planformfeed')[0];
                var formData = new FormData(form);
                $.ajax({
                    type: 'post'
                    , dataType: 'json'
                    , url: '/panchshiltowers/admin/Controller/feedController.php'
                    , data: formData
                    , contentType: false
                    , processData: false
                    , async: false
                    , beforeSend: function () {
                        $("form")[0].reset();
                    }
                    , success: function (data) {
                        $("#successfeedplan").css("display", "block");
                        window.open(pdf);
                    }
                    , error: function (data) {
                        $(".alert-danger").show();
                        $("#error-msg").text('Please try again later !!!');
                        setTimeout(function () {
                            $(".alert-danger").hide();
                        }, 10000);
                    }
                });
            }
        }
    }
}

function hideplanfeederr() {
    $("#failedfeedplan").css("display", "none");
    $("#failedemailfeedplan").css("display", "none");
    $("#failedemptyfeedplan").css("display", "none");
    $("#successfeedplan").css("display", "none");
    $("#mobileerrfeedplan").css("display", "none");
    $("#failednamefeedplan").css("display", "none");
}

function showplanfeed(e) {
    $("#pdffile").val(e);
    $('#planfeedform').modal('toggle');
}

function showplan(e) {
    $('#floorplan').modal('toggle');
    $('#floorplanimg').html("<img src='" + e + "' width='100%' />");
}

function showfullplan(e) {
    $('#floorplanmodal').modal('toggle');
    $('#floorplanimg1').html("<img src='" + e + "' width='100%' />");
}
$(".banner-jump-cursor img").click(function () {
    $('html, body').animate({
        scrollTop: $(".land-here").offset().top
    }, 1000);
});

function submitContactForm(name, email, mobile, msg, featureName = '') {
    if (name == null || name == '' || email == null || email == '' || mobile == null || mobile == '' || msg == null || msg == '') {
        $("#failedemptycn").css("display", "block");
    }
    else {
        if (!isValidEmailAddresscn(email)) {
            $("#failedemailcn").css("display", "block");
        }
        else {
            var formData = {
                feature_name: featureName,
                name: name,
                email: email,
                mobile: mobile,
                query: msg
            };
            $('#contactForm')[0].reset();

            let contactApi = baseUrl + 'contact';
            $.ajax({
                type: 'post'
                , dataType: 'json'
                , url: contactApi
                , data: JSON.stringify(formData)
                , contentType: 'application/json'
                , processData: false
                , async: false
                , beforeSend: function () {
                    $("form")[0].reset();
                }
                , success: function (data) {
                    $("#successcn").css("display", "block");
                }
                , error: function (data) {
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

function hideerrcn() {
    $("#failedcn").css("display", "none");
    $("#failedemailcn").css("display", "none");
    $("#failedemptycn").css("display", "none");
    $("#successcn").css("display", "none");
    $("#mobileerrcn").css("display", "none");
    $("#failednamecn").css("display", "none");
}
var current_url = window.location.href;
var current_origin = window.location.origin;
var baseurl = "/panchshiltowers/";
if (current_url == current_origin + baseurl) {
    setTimeout(function () {
        $.ajax({
            url: baseurl + "fetch_home_page_map.php"
            , dataType: "HTML"
            , success: function (result) {
                $(".home_page_loader").html(result);
            }
        });
    }, 5000);
}
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        setTimeout(function () {
            $(".lazy_load_img").each(function () {
                var image_source = $(this).attr('data-src');
                $(this).attr('src', image_source);
            });
        }, 1000);
    }
    lightbox.option({
        'resizeDuration': 200
        , 'wrapAround': true
    });
});


// var min_w = 300;
// var vid_w_orig;
// var vid_h_orig;

// $(function() {

//     vid_w_orig = parseInt($('video').attr('width'));
//     vid_h_orig = parseInt($('video').attr('height'));

//     $(window).resize(function () { fitVideo(); });
//     $(window).trigger('resize');

// });

// function fitVideo() {

//     $('#video-viewport').width($('.fullsize-video-bg').width());
//     $('#video-viewport').height($('.fullsize-video-bg').height());

//     var scale_h = $('.fullsize-video-bg').width() / vid_w_orig;
//     var scale_v = $('.fullsize-video-bg').height() / vid_h_orig;
//     var scale = scale_h > scale_v ? scale_h : scale_v;

//     if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

//     $('video').width(scale * vid_w_orig);
//     $('video').height(scale * vid_h_orig);

//     $('#video-viewport').scrollLeft(($('video').width() - $('.fullsize-video-bg').width()) / 2);
//     $('#video-viewport').scrollTop(($('video').height() - $('.fullsize-video-bg').height()) / 2);

// };