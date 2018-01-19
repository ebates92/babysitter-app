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

function updateRange(val) {
    document.getElementById("textInput").value=val;
    document.getElementById("hourlyRate").step = "5";
}

updateRange(15);

function updateRange2(val) {
    document.getElementById("textInput2").value=val;
    document.getElementById("maxMiles").step = "5";
}

updateRange2(25); 


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
  } );






























// $(function() {
// 	/*
// 	number of fieldsets
// 	*/
// 	var fieldsetCount = $('#formElem').children().length;
	
// 	/*
// 	current position of fieldset / navigation link
// 	*/
// 	var current 	= 1;
    
// 	/*
// 	sum and save the widths of each one of the fieldsets
// 	set the final sum as the total width of the steps element
// 	*/
// 	var stepsWidth	= 0;
//     var widths 		= new Array();
// 	$('#steps .step').each(function(i){
//         var $step 		= $(this);
// 		widths[i]  		= stepsWidth;
//         stepsWidth	 	+= $step.width();
//     });
// 	$('#steps').width(stepsWidth);
	
// 	/*
// 	to avoid problems in IE, focus the first input of the form
// 	*/
// 	$('#formElem').children(':first').find(':input:first').focus();	
	
// 	/*
// 	show the navigation bar
// 	*/
// 	$('#navigation').show();
	
// 	/*
// 	when clicking on a navigation link 
// 	the form slides to the corresponding fieldset
// 	*/
//     $('#navigation a').bind('click',function(e){
// 		var $this	= $(this);
// 		var prev	= current;
// 		$this.closest('ul').find('li').removeClass('selected');
//         $this.parent().addClass('selected');
// 		/*
// 		we store the position of the link
// 		in the current variable	
// 		*/
// 		current = $this.parent().index() + 1;
// 		/*
// 		animate / slide to the next or to the corresponding
// 		fieldset. The order of the links in the navigation
// 		is the order of the fieldsets.
// 		Also, after sliding, we trigger the focus on the first 
// 		input element of the new fieldset
// 		If we clicked on the last link (confirmation), then we validate
// 		all the fieldsets, otherwise we validate the previous one
// 		before the form slided
// 		*/
//         $('#steps').stop().animate({
//             marginLeft: '-' + widths[current-1] + 'px'
//         },500,function(){
// 			if(current == fieldsetCount)
// 				validateSteps();
// 			else
// 				validateStep(prev);
// 			$('#formElem').children(':nth-child('+ parseInt(current) +')').find(':input:first').focus();	
// 		});
//         e.preventDefault();
//     });
	
// 	/*
// 	clicking on the tab (on the last input of each fieldset), makes the form
// 	slide to the next step
// 	*/
// 	$('#formElem > fieldset').each(function(){
// 		var $fieldset = $(this);
// 		$fieldset.children(':last').find(':input').keydown(function(e){
// 			if (e.which == 9){
// 				$('#navigation li:nth-child(' + (parseInt(current)+1) + ') a').click();
// 				/* force the blur for validation */
// 				$(this).blur();
// 				e.preventDefault();
// 			}
// 		});
// 	});
	
// 	/*
// 	validates errors on all the fieldsets
// 	records if the Form has errors in $('#formElem').data()
// 	*/
// 	function validateSteps(){
// 		var FormErrors = false;
// 		for(var i = 1; i < fieldsetCount; ++i){
// 			var error = validateStep(i);
// 			if(error == -1)
// 				FormErrors = true;
// 		}
// 		$('#formElem').data('errors',FormErrors);	
// 	}
	
// 	/*
// 	validates one fieldset
// 	and returns -1 if errors found, or 1 if not
// 	*/
// 	function validateStep(step){
// 		if(step == fieldsetCount) return;
		
// 		var error = 1;
// 		var hasError = false;
// 		$('#formElem').children(':nth-child('+ parseInt(step) +')').find(':input:not(button)').each(function(){
// 			var $this 		= $(this);
// 			var valueLength = jQuery.trim($this.val()).length;
			
// 			if(valueLength == ''){
// 				hasError = true;
// 				$this.css('background-color','#FFEDEF');
// 			}
// 			else
// 				$this.css('background-color','#FFFFFF');	
// 		});
// 		var $link = $('#navigation li:nth-child(' + parseInt(step) + ') a');
// 		$link.parent().find('.error,.checked').remove();
		
// 		var valclass = 'checked';
// 		if(hasError){
// 			error = -1;
// 			valclass = 'error';
// 		}
// 		$('<span class="'+valclass+'"></span>').insertAfter($link);
		
// 		return error;
// 	}
	
// 	/*
// 	if there are errors don't allow the user to submit
// 	*/
// 	$('#registerButton').bind('click',function(){
// 		if($('#formElem').data('errors')){
// 			alert('Please correct the errors in the Form');
// 			return false;
// 		}	
// 	});
// });