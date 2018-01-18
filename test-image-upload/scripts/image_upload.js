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
        document.getElementById("error").innerHTML="File is too large ! Largest acceptable file size is 3.5Mb!";
        $("error").toggleClass('block'); 

    } else {
        document.getElementById("error").innerHTML = "Invalid file type! Allowed files are .bmp, .gif, .jpg and .png only";
        $("error").toggleClass('block');
    } 
};