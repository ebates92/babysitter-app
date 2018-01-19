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
    document.getElementById("hourlyrate").step = "5";
}



function updateRange2(val) {
    document.getElementById("textInput2").value=val;
    document.getElementById("mileswilling").step = "5";
}

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
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");	
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

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
        };
    clearField()    
    }
}

userInput()
updateRange(15);
updateRange2(25);
likesPets();
doesNotLikePets();