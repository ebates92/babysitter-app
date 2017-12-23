
$('.day-box').on("click", function (event) {
    console.log(event.target)
    $(this).toggleClass('selected');
    if (event.target.innerHTML === '') {
        event.target.innerHTML = "&check;";
    } else {
        event.target.innerHTML = "";
    }
});