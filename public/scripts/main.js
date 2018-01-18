function updateRange(val) {
    document.getElementById("textInput").value=val;
    document.getElementById("hourlyrate").step = "5";
}

updateRange(15);

function updateRange2(val) {
    document.getElementById("textInput2").value=val;
    document.getElementById("mileswilling").step = "5";
}

updateRange2(25);