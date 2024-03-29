var lastRnd;
var lastScreenWidth;

//When all Elements are loaded
$(document).ready(function () {
    responsive();
    //Go to top of page
    $('#goToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    var rnd = Math.floor((Math.random()*27)+1);
    if (rnd == lastRnd) {
        rnd += 1;
    }
    $(".img-fun").attr("src","img/fun/img" + rnd + ".jpg");
    lastRnd = rnd;
});

/*function link() {
    $('nav a').hover(function() {
        var quelleHeight = $(this).css('height');
        var quelleWidth = $(this).css('width');
        var quellePos = $(this).position();
        $('.a-hover').css({ "height": quelleHeight, 
                            "width": quelleWidth, 
                            "position": "absolute",
                            "top": quellePos.top,
                            "left": quellePos.left });
        $('nav a').before('<div class="a-hover"></div>');
    }, function() {
        $('.a-hover').css("background-color", "#ffffff");
    });
}*/
    
function goToLocation(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top -8
    }, 600); //Time in ms
}

//Toggle between Desktop and Mobile Version
$(window).resize(function() {
    var screenWidth = window.innerWidth;
    console.log(screenWidth);
    responsive();
});

function responsive(){
    screenWidth = window.innerWidth;
    if(screenWidth <= 1400 && lastScreenWidth > 1400) {
        console.log("now");
        $("nav").children("a").css("opacity", "0");
        $("nav").children("a").animate({opacity:1},1000)
    }
    else {
    }

    if($(window).width() < 1200) {
        $('.responsive-desktop').addClass('hidden');
        $('.responsive-mobile').removeClass('hidden');
    }
    else {
        $('.responsive-mobile').addClass('hidden');
        $('.responsive-desktop').removeClass('hidden');
    }
    lastScreenWidth = screenWidth;
}

//Banner Parallax Effect & Header smaller
$(function() {
    var banner = $('.parallax-background');
    var bannerText = $('.banner-text');
    var backgroundPos = $(banner).css('backgroundPosition').split(" ");
    var xPos = backgroundPos[0],
        yPos = backgroundPos[1];
    var y = Number(yPos.replace('%',''));
    var bannerFont = $(bannerText).css('font-size');
    var bannerFontSize = Number(bannerFont.replace('px',''));

    var scroll = $(document).scrollTop();
    var lastScroll = 0;

    $(window).on('scroll', function () {
        scroll = $(document).scrollTop();
        
        banner.css({
            'background-position': xPos + ((y)+(.01*scroll)) + '%'
        });
        //Make Text smaller by scrolling
        bannerText.css({
            'font-size': (bannerFontSize - (scroll*.08)) + 'px'
        });

        //Make Header smaller
        if (scroll >= 400) {
            if (lastScroll < 400) {
                var y = $(window).scrollTop(); 
                $("html, body").animate({ scrollTop: 450 }, 200);
            } 
            $(".head").css("height", "60px");
            $(".logo").css("visibility", "hidden");
            $(".menuToggle").css("top", "20px");
        }
        else {
            $(".head").css("height", "112px");
            $(".logo").css("visibility", "visible");
            $(".menuToggle").css("top", "40px");
        }
        console.log(lastScroll, scroll);
        lastScroll = scroll;
    });
});

//Tilt Effect While Moving Cursor
$(window).mousemove(function(mouseEvent) {
    var xpos;
    var ypos;
    if (mouseEvent)
    {
      //FireFox
      xpos = mouseEvent.clientX;
      ypos = mouseEvent.clientY;
    }
    else
    {
      //IE
      xpos = window.event.sclientX;
      ypos = window.event.clientY;
    }
    var width = $(window).width();
    var height = $(window).height();
    var dirX = 1;
    var dirY = 1;
    if(xpos > width/2) {
        dirX = -1;
        xpos = xpos-(width/2);
    }
    else {
        dirX = 1;
        xpos = (width/2 - xpos);
    }
    if(ypos > height/2) {
        dirY = 1;
        ypos = ypos-(height/2);
    }
    else {
        dirY = -1;
        ypos = (height/2 - ypos);
    }
    var intesivity = 800; //Higher = less intense
    var warp = (ypos + xpos) / (width + height)*(-1);
    var sum = ypos + xpos;
    //console.log(width + height + " || " + sum);
    //console.log(xpos + " || " + ypos);
    var panel = $('.responsive-desktop');
    panel.css('transform', 'perspective(1000px) rotateX(' + ypos/intesivity*dirY + 'deg) rotateY(' + xpos/intesivity*dirX + 'deg)');
});

var imgs = 27;
var i = 0;
var j = 0;
var lastRnd = [];
var rnd = Math.floor((Math.random()*imgs)+1);

//fun Stuff
$(function() {
    $(".rnd-img").click( function()
         {
            rnd = Math.floor((Math.random()*imgs)+1);
            while (rnd != lastRnd[j]) {
                j++;
                if (j >= 26) {
                    j = 0;
                   break; 
                }
                else {
                    rnd += 1;
                    if (rnd > 27) {
                        rnd = 0;
                    }
                }
            }
            $(".img-fun").attr("src","img/fun/img" + rnd + ".jpg");
            
            if (i >= imgs) {
                i = 0;
            }
            lastRnd.push(rnd);
            var output = lastRnd[i];
            i++;
            console.log(output);
         }
    );
});

$(function() {
    var show = false;
    $(".menuToggle").click( function() {
        if (show != true) {
            $(".nav-mobile").css("transform", "translateX(0)");
            $(".menuToggle").children().css("background", "#fff");
            $("body").bind("mousewheel", function() {
                return false;
            });
        show = true;
        }
        else {
            $(".nav-mobile").css("transform", "translateX(100%)");
            $(".menuToggle").children().css("background", "#333");
            $("body").unbind("mousewheel");
            show = false;
        }
    });
});

