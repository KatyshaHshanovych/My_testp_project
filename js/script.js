$(document).ready(function() {
    // обращаться к класам
    $('.block4__slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        easing:'ease',
        infinite: false,
        swipe: true,
        //быстрое переключение по стрелочке
        waitForAnimate: false,

    });

    // обращаться к айди
    // $('#teest1').slick();
}).on('click','.block5__textOnButton', function () {
    let data = $('.block5__enterName').val();
    if (data) {
        $('.block5__enterName').css('border-bottom','1px solid black');
        $('.block5__enterName').val('');
        alert('Thanks for submitting!');
    } else {
        $('.block5__enterName').css('border-bottom','1px solid red');
    }
}).on('click','.block3__textForButton', function () {
    let block3Name = $('#block3Name').val();
    let block3Email = $('#block3Email').val();
    let block3Phone = $('#block3Phone').val();
    let block3Message = $('#block3Message').val();
    if (block3Name) {
        $('#block3Name').css('border','2px solid black');
    } else {
        $('#block3Name').css('border','2px solid red');
    }
    if (block3Email) {
        $('#block3Email').css('border','2px solid black');
    } else {
        $('#block3Email').css('border','2px solid red');
    }
    if (block3Phone) {
        $('#block3Phone').css('border','2px solid black');
    } else {
        $('#block3Phone').css('border','2px solid red');
    }
    if (block3Message) {
        $('#block3Message').css('border','2px solid black');
    } else {
        $('#block3Message').css('border','2px solid red');
    }
    if (block3Name && block3Email && block3Phone && block3Message) {
        alert('Thanks for submitting!');
        $('#block3Name').val('');
        $('#block3Email').val('');
        $('#block3Phone').val('');
        $('#block3Message').val('');
    }
}).on('click','.block-contact__textForButton1', function () {
    let contactName = $('#contactName').val();
    let contactEmail = $('#contactEmail').val();
    let contactPhone = $('#contactPhone').val();
    let contactMessage = $('#contactMessage').val();
    if (contactName) {
        $('#contactName').css('border','2px solid black');
    } else {
        $('#contactName').css('border','2px solid red');
    }
    if (contactEmail) {
        $('#contactEmail').css('border','2px solid black');
    } else {
        $('#contactEmail').css('border','2px solid red');
    }
    if (contactPhone) {
        $('#contactPhone').css('border','2px solid black');
    } else {
        $('#contactPhone').css('border','2px solid red');
    }
    if (contactMessage) {
        $('#contactMessage').css('border','2px solid black');
    } else {
        $('#contactMessage').css('border','2px solid red');
    }
    if (contactName && contactEmail && contactPhone && contactMessage) {
        alert('Thanks for submitting!');
        $('#contactName').val('');
        $('#contactEmail').val('');
        $('#contactPhone').val('');
        $('#contactMessage').val('');
    }
}).on('click','.block-rules-second__arrow,.block-rules-second__question', function () {
    $(this).siblings('.block-rules-second__info').slideToggle("slow");
    $(this).siblings('.block-rules-second__arrow').toggleClass('block-rotate-180');
})


