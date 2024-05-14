$(document).ready(function () {

    var counter = 0;
    setInterval(function () {
        var c = counter % $('.multiple-app-li').length;
        $('.multiple-app-li').removeClass('active');
        $('.multiple-app-li').eq(c).addClass('active');
        ++counter
    }, 3000);

    $('.multiple-app-li').click(function () {
        $('.multiple-app-li').removeClass('active');
        $(this).addClass('active');
    })
});