$("#tab-nav-icon-open").on('click', () => {
    $("#aside").css({
        "display": "block",
        "z-index": "9999"
    });

    $("#tab-nav-icon-open").css("display", "none");
    $("#tab-nav-icon-close").css({
        "display": "block",
        "background": "red"
    });
});

$("#tab-nav-icon-close").on('click', () => {
    $("#aside").css("display", "none");

    $("#tab-nav-icon-close").css("display", "none");
    $("#tab-nav-icon-open").css("display", "block");
});
/*--------------------------------*/
$("#mobile-nav-icon-open").on('click', () => {
    $("#mobile-aside").css({
        "display" : "block",
        "zIndex" : "9999"
    });

    $("#mobile-nav-icon-open").css("display", "none");
    $("#mobile-nav-icon-close").css({
        "display" : "block",
        "background" : "red"
    });

});

$("#mobile-nav-icon-close").on('click', () => {
    $("#mobile-aside").css("display", "none");

    $("#mobile-nav-icon-close").css("display", "none");
    $("#mobile-nav-icon-open").css("display", "block");
});

/*----------aside control------------*/
$("#mobile-aside").on('click', () => {
    $("#mobile-aside").css("display", "none");
    $("#mobile-nav-icon-close").css("display", "none");
    $("#mobile-nav-icon-open").css("display", "block");
});
