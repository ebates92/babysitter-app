let slideIndex = 1
showSlides(slideIndex);

// Next/ Prev Controls
function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("step");
    var dots = document.getElementsByClassName("dot");
    var prev = document.getElementsByClassName("prev");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
	}
	for (i = 0; i < dots.length; i++) {
	    dots[i].classList.remove("active", "textchange");	
	}
	slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active", "textchange");
}

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

//  Lines 47 - 69 handles male and female selectors
window.onload = load ()

function load () {
    $(".female").addClass('fill-in-female');
}

function male () {
    $("#male-radio").on('click', function (event){
        $(".male").addClass('fill-in-male');
        $(".female").removeClass('fill-in-female');
    })
}

function female () {
    $("#female-radio").on('click', function (event){
        $(".female").addClass('fill-in-female');
        $(".male").removeClass('fill-in-male');
    })
}

male();
female();


likesPets();
doesNotLikePets();

var $alert = $('[data-alert]');
var $inputField = $('[data-language-input]');
var $submitInput = $('[data-add-language]')


function invalidInput() {
    $inputField.addClass('red-border invalid-input');
    $alert.removeClass('hide');
    $alert.addClass('alert-danger');
    $alert.text('Invalid Input');
    console.log('ERROR!');
    }

function maxInput() {
    $inputField.addClass('red-border invalid-input');
    $alert.removeClass('hide');
    $alert.addClass('alert-danger');
    $alert.text('Max number of languages entered');
    console.log('ERROR!');
    }


function clearField () {
    document.getElementById('language').value = '';
}

function userInput() {
    var languageArray = [];
    document.getElementById('add').onclick = function(){
        var text = document.getElementById('language').value;   
        var node = document.createElement("li");    
        var textNode = document.createTextNode(text);
        if (text === '') {
            invalidInput();
        } else if (languageArray.length > 4) {
            maxInput();
        } else {
        $alert.addClass('hide'); 
        node.appendChild(textNode);     
        document.getElementById('list').appendChild(node);
        list.style = `box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); 
                    background: white;
                    border: 1px solid whitesmoke;` 
            languageArray.push(text);
            console.log(languageArray);
            $('[data-name-add-language]').val(languageArray.join(', '));         
        };
    clearField()    
    }
}

userInput()


// Camera Functionality
function fileStarter(x){
    var file = x.files[0];
    var size = file.size;
    size=size/(1024*1024);
    if (size < 3.5){
        let imageType = /image.*/;
        let fileDisplayArea = document.getElementById("image-container");

            if (file.type.match(imageType)) {
                let reader = new FileReader();
                reader.onload = function(y) {
                    fileDisplayArea.innerHTML = "";
                    document.getElementById("error").innerHTML = "";
                    let img = new Image();
                    img.src = reader.result;
                    img.setAttribute("title", "Preview")
                    img.setAttribute("height", "100%")
                    img.setAttribute("width", "100%")
                    fileDisplayArea.appendChild(img);
                    $("confirmation").toggleClass('display')    
                }
            reader.readAsDataURL(file);
            }

    } else if (size > 3.5) {
        document.getElementById("error").innerHTML= "File is too large! Please upload image less than 3.5";
        $("error").toggleClass('block'); 

    } else {
        document.getElementById("error").innerHTML = "Invalid file type! Allowed files are .bmp, .gif, .jpg and .png only";
        $("error").toggleClass('block');
    } 
};

// Birthday Functionality
let monthNames = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];

for (i = new Date().getFullYear(); i > 1899; i--){
    $('#years').append($('<option />').val(i).html(i));
}

for (i = 1; i < 13; i++){
    $('#months').append($('<option />').val(i).html(i));
}

    updateNumberofDays();

$('#years, #months').on("change", function(){
    updateNumberofDays();
});

function updateNumberofDays(){
    $('#days').html('');
    let month = $('#months').val();
    let year=$('#years').val();
    let days=daysInMonth(month, year);

    for (i=1; i < days + 1; i++){
        $('#days').append($('<option />').val(i).html(i));
    }
    $('#message').html(monthNames[month - 1] + ' ' + days + ',' + ' ' + year);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

//handles calendar function. Works quite well
$('.day-box').on("click", function (event) {
    let $checkSpan = $(this).find('span');
    let $checkHidden = $(this).find('input');
    console.log(event.target)
    $(this).toggleClass('selected');
    if ($checkSpan.html() === '') {
        $checkSpan.html("&check;")
        $checkHidden.val(true);
    } else {
        $checkSpan.html('')
    }
});