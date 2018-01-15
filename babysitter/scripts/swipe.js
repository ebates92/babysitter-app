
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
        .append(`<p class = chevron-box top=0px><i class="fa chevron-icon fa-chevron-up"></i><p>`)
    
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
    let primaryStart;

    // adds touch start event
    swipeCard.addEventListener("touchstart", function(startEvent) {
        event.preventDefault();
        var startArray = startEvent.targetTouches;
        primaryStart = startArray.item(0);

        // determine what has been clicked
        if (startEvent.target === chevron) {

            // CHEVRON VARIABLES. Get the starting spot of the chevron div so that it can transition smoothly
            // let topStart = ((window.getComputedStyle(chevron)).getPropertyValue('top')).replace('px','');
            // let topStartParse = parseInt(topStart);
            let topStyleStart;
            const surroundContentDiv = document.querySelector(".radius-babysitter-content")
            const surroundDivHeight = surroundContentDiv.clientHeight;
            let firstPass = 0
            let direction;
            let notDirection;
            let directionValue;

            chevron.addEventListener('touchmove', function(moveEvent) {
                event.preventDefault();

                // set variables for each move event logged
                let moveArray = moveEvent.changedTouches;
                let primaryMove = moveArray[0];
                let distanceMovedY = primaryMove.screenY - primaryStart.screenY;

                // only do on first move event
                if (firstPass === 0) {

                    // establish direction and set variables
                    if (distanceMovedY < 0) {
                        direction = 'up';
                        notDirection ='down';
                        directionValue = "-";
                        topStyleStart = 0;
                    } else {
                        direction = 'down'
                        notDirection ='up';
                        directionValue = ""
                        topStyleStart = (-surroundDivHeight)+chevron.clientHeight
                    }
                    firstPass = 1;
                    console.log(direction)
                };

                // move the chevron with finger
                chevron.style.position = 'relative';
                let moveTopPosition = topStyleStart + distanceMovedY;
                chevron.style.top = moveTopPosition +'px';
                chevron.style.transform = `translateY(0px)`;
            });

            chevron.addEventListener('touchend', function(endEvent) {
                event.preventDefault();
                requiredDistance = 120;
                var endArray = endEvent.changedTouches;
                var primaryEnd = endArray.item(0);
                var distanceMovedY = primaryEnd.screenY - primaryStart.screenY;

                // did the vertical swipe travel far enough
                if (Math.abs(distanceMovedY) > requiredDistance) {

                    // determines div size and automatically attaches to the top
                    // takes swipecard height, subtracts the height of the chevron box to justify it to the top and then accounts for the distance already moved.
                    let distanceNeededToMove = surroundDivHeight-(Math.abs(distanceMovedY)+Math.abs(chevron.clientHeight));
                    chevron.style.transform = `translateY(${directionValue}${distanceNeededToMove}px)`;
                    chevron.style.transitionDuration = '1s';
                    chevron.style.transitionTimingFunction = 'cubic-bezier(.28,.79,.8,.96)';
                    
                    // change chevron image
                    const chevronImage = document.querySelector('.chevron-icon');
                    let chevronClassToRemove = `fa-chevron-${direction}`
                    let chevronClassToAdd = `fa-chevron-${notDirection}`
                    chevronImage.classList.add(chevronClassToAdd);
                    chevronImage.classList.remove(chevronClassToRemove);

                } else {
                    chevron.style.top = `0px`;
                    chevron.style.transform = `translateY(${topStyleStart}px)`;
                    chevron.style.transitionDuration = '1s';
                }
            });

        } else {
        
            // track movement of touch across the screen
            swipeCard.addEventListener('touchmove', function(moveEvent){
                event.preventDefault();
                console.log(moveEvent);
                var moveArray = moveEvent.changedTouches;
                var primaryMove = moveArray[0];
                var distanceMovedX = primaryMove.screenX - primaryStart.screenX;

                // // move along the x axis         

                    swipeCard.style.left = distanceMovedX + 'px';
                    swipeCard.style.transform = `rotate(${distanceMovedX/6}deg)`;
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
            });
    
        };
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



