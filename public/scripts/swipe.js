
var BABYSITTERDATA;
var BABYSITTERIDS;

const checkOrNo = {
    true: '&check;',
    false: ''
};

// gets babysitter data from JSON file
// MUST USE MY-LITTLE-CORS-PROXY AND THEN NODE APP.JS SIMULTANEOUSLY

function getBabysitters (callback1, callback2, callback3) {
    $.get('/swipe/babysitters', function(data) {
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
    console.log(babySitterId);
    console.log(BABYSITTERDATA)
    const surroundContentDiv = $(".radius-babysitter-content")
    const surroundDivHeight = surroundContentDiv.height();
    console.log(surroundDivHeight)

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

    // calendar elements

    var $profileCalendar = $('<div>', {
        'class': 'profile-calendar'
    })
        .append(`
        <table>
            <tr>
                <th class="time-of-day"></th>
                <th class="weekday">S</th>
                <th class="weekday">M</th>
                <th class="weekday">T</th>
                <th class="weekday">W</th>
                <th class="weekday">T</th>
                <th class="weekday">F</th>
                <th class="weekday">S</th>
            </tr>
            <tr>
                <td class="time-of-day">Morning</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['sun_morning']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['mon_morning']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['tues_morning']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['wed_morning']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['thurs_morning']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['fri_morning']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['sat_morning']]}</td>
            </tr>
            <tr>
                <td class="time-of-day">Afternoon</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['sun_afternoon']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['mon_afternoon']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['tues_afternoon']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['wed_afternoon']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['thurs_afternoon']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['fri_afternoon']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['sat_afternoon']]}</td>
            </tr>
            <tr>
                <td class="time-of-day">Evening</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['sun_evening']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['mon_evening']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['tues_evening']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['wed_evening']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['thurs_evening']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['fri_evening']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['sat_evening']]}</td>
            </tr>
            <tr>
                <td class="time-of-day">Overnight</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['sun_overnight']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['mon_overnight']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['tues_overnight']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['wed_overnight']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['thurs_overnight']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['fri_overnight']]}</td>
                <td class="day-box">${checkOrNo[BABYSITTERDATA[babySitterId]['sat_overnight']]}</td>
            </tr>
        </table>`)

    // profile elements
    var $profileElements = $('<div>', {
        'class': 'profile-page'
    })
        .append(`<div class = profile-icons><div class='profile-icon'>Image#1</div><div class='profile-icon'>Image#2</div><div class='profile-icon'>Image#3</div><div class='profile-icon'>Image#4</div></div>`)
        .append(`<div class = profile-description>${BABYSITTERDATA[babySitterId]['summary']}</div>`)
        .append($profileCalendar)
        .append(`<div class=profile-bottom><div class=language>${BABYSITTERDATA[babySitterId]['languages']}</div><div class=age-group>${BABYSITTERDATA[babySitterId]['age-group']}</div></div>`)

    // chevron/profile container
    var $babysitterProfile = $('<div>', {
        'class': 'chevron-container'
    })
        .append(`<p class = chevron-box><i class="fa chevron-icon fa-chevron-up"></i></p>`)
        .append($profileElements)

    // swipe description
    var $babysitterDescription = $('<div>', {
        'class':'babysitter-description'
    })
        .append(`<p class=name>${BABYSITTERDATA[babySitterId]['firstname']}</p>`)
        .append(`<p class=age bio-details>${BABYSITTERDATA[babySitterId]['gender']} - ${age} - ${BABYSITTERDATA[babySitterId]['city']}, ${BABYSITTERDATA[babySitterId]['state']}</p>`)
        .append(`<p class=experience bio-details>Experience: ${BABYSITTERDATA[babySitterId]['experience']} - $${BABYSITTERDATA[babySitterId]['hourlyrate']}/hour</p>`)
        .append($babysitterProfile)

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
    
    $('.chevron-container').css({
        'height': surroundDivHeight
    });

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
    let chevronContainer = document.querySelector('.chevron-container')
    let chevronBox = document.querySelector(".chevron-box")
    let primaryStart;
    let babysitter_id = swipeCard.getAttribute('id')
    console.log(babysitter_id)

    // adds touch start event
    swipeCard.addEventListener("touchstart", function(startEvent) {
        event.preventDefault();
        var startArray = startEvent.targetTouches;
        primaryStart = startArray.item(0);

        // determine what has been clicked
        if (startEvent.target === chevronBox) {

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

            chevronBox.addEventListener('touchmove', function(moveEvent) {
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
                        topStyleStart = (-surroundDivHeight)+chevronBox.clientHeight
                    }
                    firstPass = 1;
                    console.log(direction)
                };

                // move the chevron with finger
                chevronContainer.style.position = 'relative';
                let moveTopPosition = topStyleStart + distanceMovedY;
                chevronContainer.style.top = moveTopPosition +'px';
                chevronContainer.style.transform = `translateY(0px)`;
            });

            chevronBox.addEventListener('touchend', function(endEvent) {
                event.preventDefault();
                requiredDistance = 100;
                var endArray = endEvent.changedTouches;
                var primaryEnd = endArray.item(0);
                var distanceMovedY = primaryEnd.screenY - primaryStart.screenY;

                // did the vertical swipe travel far enough
                if (Math.abs(distanceMovedY) > requiredDistance) {

                    // determines div size and automatically attaches to the top
                    // takes swipecard height, subtracts the height of the chevron box to justify it to the top and then accounts for the distance already moved.
                    let distanceNeededToMove = surroundDivHeight-(Math.abs(distanceMovedY)+Math.abs(chevronBox.clientHeight));
                    chevronContainer.style.transform = `translateY(${directionValue}${distanceNeededToMove}px)`;
                    chevronContainer.style.transitionDuration = '1s';
                    chevronContainer.style.transitionTimingFunction = 'cubic-bezier(.28,.79,.8,.96)';
                    
                    // change chevron image
                    const chevronImage = document.querySelector('.chevron-icon');
                    let chevronClassToRemove = `fa-chevron-${direction}`
                    let chevronClassToAdd = `fa-chevron-${notDirection}`
                    chevronImage.classList.add(chevronClassToAdd);
                    chevronImage.classList.remove(chevronClassToRemove);

                    // To add and remove profile elements

                } else {
                    chevronContainer.style.top = `0px`;
                    chevronContainer.style.transform = `translateY(${topStyleStart}px)`;
                    chevronContainer.style.transitionDuration = '1s';
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
                    matchID(true, babysitter_id);

                } else if (-requiredDistance > distanceMovedX) {
                    console.log('false');
                    reloadSwipe();
                    matchID(false, babysitter_id)
                } else {
                    console.log('reswipe');
                    reswipe();
                };
            });
    
        };
    });
};

function matchID (likeValue, bID, pID) {
    $.post('/swipe/match',{
        like: likeValue,
        babysitter_id: bID,
        // parent_id: pID
    }).then((res) => {
        console.log(res);
    })
}

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

// Event listener for navigation bar

function navBarClick () {
    let $navbar = $('#settings');
    $navbar.on('click', (event) => {
        let $settingOptions = $('.setting-options')
        $settingOptions.toggle('.setting-hidden')
    })
}

getBabysitters(bodyContainer,bodyContainer,swipeEvents)
navBarClick();