
// variables
var sideNav = document.querySelector('.responsive-sidenav');
var hiddenOverlay = document.querySelector('.hidden-overlay');

// Functions

window.onresize = function() {
    if (window.innerWidth > 1128) {
        sideNav.style.left = '-300px';
        hiddenOverlay.style.opacity = '0';
        hiddenOverlay.style.zIndex = '-1';
    }
    
}
$(document).ready(function() {
    $(".faq-details").slideUp(50);
})

function openSidebar() {
    sideNav.style.left = '0px';
    hiddenOverlay.style.opacity = '1';
    hiddenOverlay.style.zIndex = '10';
}

function closeSidebar() {
    sideNav.style.left = '-300px';
    hiddenOverlay.style.opacity = '0';
    hiddenOverlay.style.zIndex = '-1';
}

$(".faq-title").click(function() {
    $title = $(this);
    $details = $title.next();
    $(".faq-details").not($details).slideUp(100);
    $(".faq-title .cross").removeClass("rotated");
    
    $(".faq-title").css({"background-color": "white", "color": "black", "font-weight": "100"})
    $title.css({"background-color": "rgb(240, 93, 93)", "color": "white", "font-weight": "600"})
    $hold = $details.is(":visible");
    $details.slideToggle(100);
    $cross = $title.children()[1];
    if ($hold == true) {
        $(".faq-title").css({"background-color": "white", "color": "black", "font-weight": "100"})
    }   else {
        $title.css({"background-color": "rgb(240, 93, 93)", "color": "white", "font-weight": "600"});
        $cross.classList.add("rotated");
    }
});

$(".faq-cat div").click(function() {
    $(".faq-cat div").removeClass("active");
    $(this).toggleClass("active");
    $pos = ".faq-" + this.classList[0];
    $(".faq-queries > div").css({"display": "none"});
    $($pos).css({"display": "block"});
})