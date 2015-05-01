/*
    Responsive Helper - Last updated: 17.04.15

    - Usage -

    Reference before closing </body>. Remove on prod.
    Wrap all contents into <div class="lv-super"></div>
*/
//-----------------------------------------------------------------
// Variables - Enter breakpoints here
//-----------------------------------------------------------------

var small  = 640;
var medium = 1024;
var large  = 1140;
var xlarge = 1300;

//-----------------------------------------------------------------
// Responsive Helper
//-----------------------------------------------------------------

(function() {
    function responsiveHelper() {
        var lvSuper = $('.lv-super');

        if ($('.lv-screen-data').length != 1) {
            lvSuper.append('<div class="lv-screen-data"></div>');
        }
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var device;

        if (screenWidth <= small) device = "Small";
        if (screenWidth > small && screenWidth <= medium) device = "Medium";
        if (screenWidth > medium && screenWidth <= large) device = "Large";
        if (screenWidth > large && screenWidth <= xlarge) device = "xLarge";
        if (screenWidth > xlarge) device = "xxLarge";

        $('.lv-screen-data').html(screenWidth+" x "+screenHeight+"<br>"+device)
            .css({
                'position': 'fixed',
                'top': 0,
                'padding': '10px 20px',
                'background': 'rgba(0,0,0,0.5)',
                'font-family': 'Helvetica Neue',
                'font-size': '14px',
                'color': 'white',
                'z-index': 9999
            })
            .click(function(){
                lvSuper.toggleClass('developer');
            });
    }

    // Launch it
    responsiveHelper();

    //==================================================
    // Resize
    //==================================================

    $(window).resize(function(){
        responsiveHelper();
    });
})();