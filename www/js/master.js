/*
$('#splash').click(function() {
    $(this).remove();
});
setTimeout(function() {
    $('#splash').animate({'opacity': 0}, 500, function() {
        $(this).remove();
    })
}, 2000);
*/

$('.media-image, .modal-trigger').click(function() {
    var media_id = $(this).attr('data-media-id');
    displayModal(media_id);
});

function modal_trigger_func(obj)
{
    var media_id = $(obj).attr('data-media-id');
    displayModal(media_id); 
}

$('#opacity, .modal-close').click(function() {
    hideModal();
});

function hideModal() {
    $('#opacity, .modal').hide();
    $('video').each(function() {
        $(this).get(0).pause();
        $(this).get(0).currentTime = 0;
    });
}

function displayModal(media_id) {
    if (media_id) {
        $('#opacity, .modal[media-id='+media_id+']').show();
    } else {
        $('#opacity, .modal').show();
    }
}

function initImgCache() {
    ImgCache.options.debug = true;

    ImgCache.init(function(){
        console.log('ImgCache init: success!');
    }, function(){
        console.log('ImgCache init: error! Check the log for errors');
    });
}

function scrollDown(divID) {
    console.log("scrollDown");
    var objDiv = document.getElementById(divID);
    objDiv.scrollTop += 100;// objDiv.scrollHeight;
}

function test_log(msg) {
    console.log("%c" + "test_log    : "  + msg, "font-color:#0a0;");
}
