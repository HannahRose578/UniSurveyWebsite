
const surveyRoot = document.getElementById("surveyRoot");

const answers = {id: 0, name: "John Doe"};

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

function setId() {
    let id = document.getElementById("srv1").elements[0];
    answers.id = id;
    inflateForm("testButton.html");
}