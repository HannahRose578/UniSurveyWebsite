function testStartup() {
    var e, xhttp;
    e = document.getElementById("surveyRoot");

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200){ e.innerHTML = this.responseText}
            if (this.status == 404) {e.innerHTML = "Survey not found.";}
        }
    };
    xhttp.open("GET", "forms/testButton.html", true);
    xhttp.send();
    return
}