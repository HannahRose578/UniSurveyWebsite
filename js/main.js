
const surveyRoot = document.getElementById("surveyRoot");

const answers = {id: 0, lastEatTime: "00:00"};

function testStartup() {
    inflateForm("testButton.html");
}

function inflateForm(name) {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) { surveyRoot.innerHTML = this.responseText; }
            if (this.status == 404) { surveyRoot.innerHTML = "Survey not found."; }
        }
    };
    xHttp.open("GET", "forms/" + name, true);
    xHttp.send();
}

function setId() {
    answers.id = document.getElementById("enterId").elements[0];
    inflateForm("lastEat.html");
}

function setLastEat() {
    answers.lastEatTime = document.getElementById("lastEat").elements[0].value;
    inflateForm("testButton.html")
}