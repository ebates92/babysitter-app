

var BABYSITTERDATA;

var BABYSITTERIDS;

// gets babysitter data from JSON file
// MUST USE MY-LITTLE-CORS-PROXY AND THEN NODE APP.JS SIMULTANEOUSLY

function getBabysitters (callback1, callback2, callback3) {
    $.get('http://localhost:3000/http://localhost:8000/api',function(data) {
        BABYSITTERDATA = JSON.parse(data);
        BABYSITTERIDS = Object.keys(BABYSITTERDATA);
        console.log(BABYSITTERDATA);
        callback1();
        callback2();
        callback3();
    });
};


// creates swipe container
function bodyContainer () {
    // random babysitter selected
    var babySitterId = grabBabysitters();

    // swipe container

        // if making a second container, needs to be at -1 z-index
    var mainBoxArray = document.querySelectorAll(".main-box")
    if (mainBoxArray[0]) {
        var $container = $('<div>', {
            'class': 'main-box behind',
            'id': babySitterId
        });
    } else {
        var $container = $('<div>', {
            'class': 'main-box',
            'id': babySitterId
        });
    };


    // anchor tag for image to sit in
    var $anchor = $('<a>', {
        href: ""
    });

    // swipe image
    var $image = $('<img>', {
        'src': BABYSITTERDATA[babySitterId]["image"]
    });

    // swipe description
    var $babysitterDescription = $('<div>', {
        'class':'babysitter-description'
    })
        .append(`<p class=name>Name: ${BABYSITTERDATA[babySitterId]['first-name']}</p>`)
        .append(`<p class=hourly-rate>$${BABYSITTERDATA[babySitterId]['hourly-rate']}/hour</p>`);
    
    // checkbox
    var $checkBox = $('<div>', {
        'class':'checkbox-panel'
    })
        .append(`<div class=dont-like>&#10005;</div>`)
        .append(`<div class=like>&#10003;</div>`)
    
    // append elements
    $('body').append(
        ($container)
            .append(($anchor)
                .append($image)
            )
            .append($babysitterDescription)
            .append($checkBox)
        );
        console.log("make a promise work");
        return BABYSITTERDATA;
};

// looks through database for random image
function grabBabysitters () {
    var random = Math.floor((Math.random() * BABYSITTERIDS.length));
    return BABYSITTERIDS[random];
}

// swipe functionality

function swipeLeftRight () {
    var mainBoxArray = document.querySelectorAll(".main-box");
    var swipeCard = mainBoxArray[0];
    var primaryStart;

    // adds touch start event
    swipeCard.addEventListener("touchstart", function(startEvent) {
        event.preventDefault();
        var startArray = startEvent.targetTouches;
        primaryStart = startArray.item(0);

        // track movement of touch across the screen
        swipeCard.addEventListener('touchmove', function(moveEvent){
            event.preventDefault();
            console.log(moveEvent);
            var moveArray = moveEvent.changedTouches;
            var primaryMove = moveArray[0];
            var distanceMovedX = primaryMove.screenX - primaryStart.screenX;
            var distanceMovedY = primaryMove.screenY - primaryStart.screenY;

            console.log(distanceMovedX);
            console.log(distanceMovedY)
            // move along the x axis         
            if(Math.abs(distanceMovedX) > Math.abs(distanceMovedY)) {
                swipeCard.style.left = distanceMovedX + 'px';
                swipeCard.style.transform = `rotate(${distanceMovedX/6}deg)`;

            // moves y axis
            } else {
                swipeCard.style.top = distanceMovedY + 'px';
            };
        });
    });
    // adds touchend event and determines the distance traveled across x coordinate to determine swipe ressult
    swipeCard.addEventListener("touchend", function(endEvent) {
        event.preventDefault();
        var endArray = endEvent.changedTouches;
        var primaryEnd = endArray.item(0);
        var requiredDistance = 120;
        var distanceMovedX = primaryEnd.screenX - primaryStart.screenX;
        // determines if necessary distance traveled is met

        // determines if swiping left and right
        if(Math.abs(distanceMovedX) > Math.abs(distanceMovedY)){
            if (requiredDistance < distanceMovedX) {
                console.log("true");
                reloadSwipe();
            } else if (-requiredDistance > distanceMovedX) {
                console.log('false');
                reloadSwipe();
            } else {
                console.log('reswipe');
                reswipe(distanceMovedX);
            };
        } else {
            // creating different js file to accomodate for this
        }

    });
    return console.log("make a promise work")
};

function removeSwipeCard () {
    var mainBoxArray = document.querySelectorAll(".main-box");
    var swipeCard = mainBoxArray[0];
    document.querySelector('body').removeChild(swipeCard);
};

function reswipe (distanceMovedX) {
    var mainBoxArray = document.querySelectorAll(".main-box");
    var swipeCard = mainBoxArray[0];
    var windowSize = window.screen.width;
    swipeCard.style.left = 0;
    swipeCard.style.top = 0;
    swipeCard.style.transform = `rotate(0deg)`;
};

function reloadSwipe() {
    removeSwipeCard();
    // remove behind class  REFACTOR AT SOME POINT
    document.querySelector(".main-box").classList.remove('behind');
    bodyContainer();
    swipeLeftRight();
};

getBabysitters(bodyContainer,bodyContainer,swipeLeftRight)



