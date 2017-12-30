
function bodyContainer () {
    $('body').append('<div>', {
        'class': 'main-box'
    });
};

bodyContainer();

function pictureContainer () {
    $('.main-box').append('<img>', {
        'src':''
    })
}