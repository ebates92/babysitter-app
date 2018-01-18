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