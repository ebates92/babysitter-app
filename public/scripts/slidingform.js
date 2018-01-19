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
		slides[i].classList.remove("active");
	}
	for (i = 0; i < dots.length; i++) {
	    dots[i].classList.remove("active");	
	}
	slides[slideIndex - 1].classList.add("active");
	dots[slideIndex - 1].classList.add("active");
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

// function updateRange(val) {
//     document.getElementById("textInput").value=val;
//     document.getElementById("hourlyRate").step = "5";
// }

// updateRange(15);

// function updateRange2(val) {
//     document.getElementById("textInput2").value=val;
//     document.getElementById("maxMiles").step = "5";
// }

// updateRange2(25); 


$('.day-box').on("click", function (event) {
    console.log(event.target)
    $(this).toggleClass('selected');
    if (event.target.innerHTML === '') {
        event.target.innerHTML = "&check;";
    } else {
        event.target.innerHTML = "";
    }
});

$( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  });