function likesPets () {
    $(".likes-pets").on('click', function (event) {
        $("#pets").toggleClass('hidden');
    });
};

likesPets();