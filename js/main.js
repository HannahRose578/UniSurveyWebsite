
const surveyRoot = document.getElementById("surveyRoot");

function testStartup() {
    inflateForm("testButton.html");
}

function inflateForm(name) {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200){ surveyRoot.innerHTML = this.responseText; }
            if (this.status == 404) { surveyRoot.innerHTML = "Survey not found."; }
        }
    };
    xHttp.open("GET", "forms/" + name, true);
    xHttp.send();
}