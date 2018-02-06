// Event listener for navigation bar

function navBarClick () {
    let $navbar = $('#settings');
    $navbar.on('click', (event) => {
        let $settingOptions = $('.setting-options')
        $settingOptions.toggle('.setting-hidden')
    })
}

navBarClick();
