$(document).ready(function () {
    $('.content').hide();
    $('.slide').click(function () {
        var $this = $(this);
        $(this).siblings('.content').slideToggle(200, function () {
            $this.text($(this).is(':visible') ? 'click to close' : 'click to open');
        });

    });
});