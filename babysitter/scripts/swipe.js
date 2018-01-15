

var BABYSITTERDATA;
var BABYSITTERIDS;

// gets babysitter data from JSON file
// MUST USE MY-LITTLE-CORS-PROXY AND THEN NODE APP.JS SIMULTANEOUSLY

function getBabysitters (callback1, callback2, callback3) {
    $.get('scripts/test-data.json',function(data) {
        BABYSITTERDATA = data;
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

    // to calculate age of babysitter
    let birthday = `${BABYSITTERDATA[babySitterId]['birth-year']}${BABYSITTERDATA[babySitterId]['birth-month']}${BABYSITTERDATA[babySitterId]['birth-day']}`
    let age = moment(birthday, "YYYYMMDD").fromNow().slice(0,2);

    // SWIPE CONTAINER

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

    // div for border radius on babysitter image and description
    var radius = $('<div>', {
        'class':'radius-babysitter-content'
    });

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
        .append(`<p class=name>${BABYSITTERDATA[babySitterId]['first-name']}</p>`)
        .append(`<p class=age bio-details>${BABYSITTERDATA[babySitterId]['gender']} - ${age} - ${BABYSITTERDATA[babySitterId]['city']}, ${BABYSITTERDATA[babySitterId]['state']}</p>`)
        .append(`<p class=experience bio-details>Experience: ${BABYSITTERDATA[babySitterId]['paid-experience']} - $${BABYSITTERDATA[babySitterId]['hourly-rate']}/hour</p>`)
        .append(`<p class = chevron-box><i class="fa fa-chevron-up"></i><p>`)
    
    // checkbox
    var $checkBox = $('<div>', {
        'class':'checkbox-panel'
    })
        .append(`<div class=dont-like>&#10005;</div>`)
        .append(`<div class=like>&#10003;</div>`)
    
    // append elements
    $('body').append(
        ($container)
            .append((radius)
                .append(($anchor)
                    .append($image)
                )
                .append($babysitterDescription)
                // .append($checkBox)
            )
        )
        return BABYSITTERDATA;
};

// looks through database for random image
function grabBabysitters () {
    var random = Math.floor((Math.random() * BABYSITTERIDS.length));
    return BABYSITTERIDS[random];
}

// swipe functionality

function swipeEvents () {
    var swipeCard = document.querySelector(".main-box");
    let chevron = document.querySelector(".chevron-box")
    let surroundContentDiv = document.querySelector(".radius-babysitter-content")
    let primaryStart;

    // adds touch start event
    swipeCard.addEventListener("touchstart", function(startEvent) {
        event.preventDefault();
        var startArray = startEvent.targetTouches;
        primaryStart = startArray.item(0);
        var directionDecided = 0;

        // determine what has been clicked
        if (startEvent.target === chevron) {
            chevron.addEventListener('touchmove', function(moveEvent) {
                event.preventDefault();
                var moveArray = moveEvent.changedTouches;
                var primaryMove = moveArray[0];
                var distanceMovedY = primaryMove.screenY - primaryStart.screenY;
                // move the chevron with finger
                chevron.style.position = 'relative';
                chevron.style.top = distanceMovedY +'px';
            });
            chevron.addEventListener('touchend', function(endEvent) {
                event.preventDefault();
                requiredDistance = 120;
                var endArray = endEvent.changedTouches;
                var primaryEnd = endArray.item(0);
                var distanceMovedY = primaryEnd.screenY - primaryStart.screenY;
                console.log(distanceMovedY)
                // did the vertical swipe travel far enough
                if (-distanceMovedY > requiredDistance) {
                    chevron.style.position = 'relative';
                    console.log(surroundContentDiv.clientHeight)
                    chevron.style.top = -(surroundContentDiv.clientHeight-chevron.clientHeight) +'px';
                } else {
                    // will need to reset the chevron
                }
            })



        } else {
        
            // track movement of touch across the screen
            swipeCard.addEventListener('touchmove', function(moveEvent){
                event.preventDefault();
                console.log(moveEvent);
                var moveArray = moveEvent.changedTouches;
                var primaryMove = moveArray[0];
                var distanceMovedX = primaryMove.screenX - primaryStart.screenX;


                // // creates a determined direction that doesn't change unless touch is restarted
                // if (directionDecided === 0) {
                //     if(Math.abs(distanceMovedX) > Math.abs(distanceMovedY)) {
                //         directionDecided = 'left/right'
                //         console.log('left/right')
                //     } else if (Math.abs(distanceMovedX) < Math.abs(distanceMovedY)) {
                //         directionDecided = 'up'
                //         createProfileStats();
                //         console.log('up')
                //     };
                // };

                // // move along the x axis         
                // if(directionDecided === 'left/right') {
                    swipeCard.style.left = distanceMovedX + 'px';
                    swipeCard.style.transform = `rotate(${distanceMovedX/6}deg)`;

                // // moves y axis
                // } else {
                //     swipeCard.style.top = distanceMovedY + 'px';

                // };
            });
        }    
  
    });
    // adds touchend event and determines the distance traveled across x coordinate to determine swipe ressult
    swipeCard.addEventListener("touchend", function(endEvent) {
        event.preventDefault();
        var endArray = endEvent.changedTouches;
        var primaryEnd = endArray.item(0);
        var requiredDistance = 120;
        var distanceMovedX = primaryEnd.screenX - primaryStart.screenX;
        var distanceMovedY = primaryEnd.screenY - primaryStart.screenY;
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
                reswipe();
            };
        // determines swipe up/down
        } else {

            if (-requiredDistance > distanceMovedY) {
                console.log("true");

            } else {
                console.log('reswipe');
                reswipe();
            }
        }
    });
};

function removeSwipeCard () {
    var mainBoxArray = document.querySelectorAll(".main-box");
    var swipeCard = mainBoxArray[0];
    document.querySelector('body').removeChild(swipeCard);
};

function reswipe () {
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
    swipeEvents();
};

function createProfileStats () {
    var mainBoxArray = $(".main-box")
    mainBoxArray[0].append('<div>')
};

getBabysitters(bodyContainer,bodyContainer,swipeEvents)



