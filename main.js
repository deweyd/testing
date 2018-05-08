$(document).ready(function(){
    $(".click_left").click(function(){           // При нажатии на кнопку с классом .click_left
        $(".left_panel").animate({width:'toggle'},350);    // скрытая панель разворачивается либо сворачивается
    });
    $(".click_right").click(function(){           // При нажатии на кнопку с классом .click_right
        $(".right_panel").animate({width:'toggle'},350); // скрытая панель разворачивается либо сворачивается

    });
    if ($(window).width() > 625) {
        $("#sidebar").stick_in_parent({
            offset_top: 40
        });
    }

});
