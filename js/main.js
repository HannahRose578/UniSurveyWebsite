
const surveyRoot = document.getElementById("surveyRoot");

const answers = {id: 0, lastEatTime: "00:00"};

let progress = 0;

const formByIndex = ["testButton.html", "enterId.html", "lastEat.html", "VASInstruct1.html", "VASHunger.html"];

function testStartup() {
    inflateForm("testButton.html");
}

function inflateForm(name) {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) { surveyRoot.innerHTML = this.responseText; setUpForm(progress);}
            if (this.status == 404) { surveyRoot.innerHTML = "Survey not found."; }
        }
    };
    xHttp.open("GET", "forms/" + name, true);
    xHttp.send();
}

function nextForm(){
    saveFormValues(progress);
    progress += 1;
    if (progress >= 1){
        document.getElementById("btnPrev").style.visibility = "visible";
    }
    if (progress >= formByIndex.length-1){
        document.getElementById("btnNext").style.visibility = "hidden";
    }
    inflateForm(formByIndex[progress]);
}

function prevForm() {
    saveFormValues(progress);
    progress -= 1;
    if (progress <= 0){
        document.getElementById("btnPrev").style.visibility = "hidden";
    }
    if (progress < formByIndex.length-1){
        document.getElementById("btnNext").style.visibility = "visible";
    }
    inflateForm(formByIndex[progress]);
}

function setUpForm(index){
    switch (index) {
        case 4: document.getElementById("sliderVASHungry").value = getRandomNumber(); break;
        default: console.log("form " + progress + " needs no setup"); break;
    }
}

function saveFormValues(index) {
    switch (index) {
        case 1: answers.id = document.getElementById("enterId").elements[0]; break;
        case 2: answers.lastEatTime = document.getElementById("lastEat").elements[0].value; break;
        default: console.log("Nothing to save for form " + index); break;
    }
}