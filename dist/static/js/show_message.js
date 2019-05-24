/**
 * Created by guohe on 2016/1/25.
 * Modified by liucw on 2019/4/29.
 */
export function showMsg(text, position) {
    console.log("text:",text)
    console.log("position:",position)
    console.log("show message")
    var show = $('.show_msg').length;
    if (show > 0) {
        console.log("show.length:",show)
    } else {
        console.log("show.length:",show)
        var div = $('<div style="text-align:center;"></div>');
        div.addClass('show_msg');
        var span = $('<span></span>');
        span.addClass('show_span');
        span.appendTo(div);
        span.text(text);
        $('body').append(div);
    }
    $(".show_span").text(text);
    if (position == 'bottom') {
        $(".show_msg").css('bottom', '5%');
    } else if (position == 'center') {
        $(".show_msg").css('top', '');
        $(".show_msg").css('bottom', '50%');
    } else {
        $(".show_msg").css('bottom', '95%');
    }
    $('.show_msg').hide();
    $('.show_msg').fadeIn(1000);
    $('.show_msg').fadeOut(1000);
}
