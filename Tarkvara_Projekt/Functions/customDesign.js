let windowHeight = $(window).height();
let windowWidth = 500;
windowHeight -= windowHeight/10;
$('#content').css({ height: windowHeight, width: windowWidth});
$(window).on('resize', () => {
    windowHeight = $(window).height();
    windowHeight -= windowHeight/10;
    $('#content').css({ height: windowHeight, width: windowWidth})
});