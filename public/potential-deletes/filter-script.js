function likesPets () {
    $(".likes-pets").on('click', function (event) {
        $("#pets").removeClass('hidden');
    });
};

function doesNotLikePets () {
    $(".does-not-like-pets").on('click', function (event) {
        $("#pets").addClass('hidden');
        // $("input[name=dog]").checked = false;
        // NEED TO FIX SINCE I CAN'T GET THE CHECKBOX ON THE DOG/CAT TO BE REMOVED
        $(".dog").checked = false;
        $(".cat").checked = false;
        console.log($(".dog"));
    });
};

function updateRange(val) {
    document.getElementById("textInput").value=val;
    document.getElementById("hourlyRate").step = "5";
}

$('.day-box').on("click", function (event) {
    console.log(event.target)
    $(this).toggleClass('selected');
    if (event.target.innerHTML === '') {
        event.target.innerHTML = "&check;";
    } else {
        event.target.innerHTML = "";
    }
});

$('.toggle').on("click", function (event) {
    console.log(event.target)
    $('div.advanced').toggleClass('hidden');
});

updateRange(15);
likesPets();
doesNotLikePets();