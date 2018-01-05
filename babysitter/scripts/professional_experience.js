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