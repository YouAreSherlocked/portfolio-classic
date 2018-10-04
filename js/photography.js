$(document).ready(function () {
    addContent();
});

function addContent() {
    for (var i = 0; i < 17; i++) {
    var content = document.getElementsByClassName("content");
    var newImg = document.createElement("div");
    $(newImg).addClass("row");

    var eLeft = document.createElement("div");
    $(eLeft).addClass("col-sm-2");
    var eCenter = document.createElement("div");
    $(eCenter).addClass("col-sm-8");
    var photo = document.createElement("div");
    var imgClass = "photo-" + i; 
    $(photo).addClass("col-sm-12 photo " + imgClass);
    var eRight = document.createElement("div");
    $(eRight).addClass("col-sm-2");
    $(eRight).html(i);

    $(eCenter).append(photo);
    $(newImg).append(eLeft);
    $(newImg).append(eCenter);
    $(newImg).append(eRight);

    $(content).prepend(newImg);

    $("." + imgClass).css({
        'background-image' : 'url("../img/photography/img' + i + '.jpg")',
        'z-index' : i
    });
    }
    
}