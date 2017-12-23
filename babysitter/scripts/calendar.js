
$('.day-box').on("click", function () {
    console.log(event.target)
    $(this).toggleClass('selected');
});