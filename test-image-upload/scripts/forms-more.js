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


likesPets();
doesNotLikePets();