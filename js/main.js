
const surveyRoot = document.getElementById("surveyRoot");

const answers = {id: 0, lastEatTime: "00:00", hunger: -1};

let progress = 0;

const formByIndex = ["enterId.html", "lastEat.html", "VASInstruct1.html", "VASHunger.html", "slideshow.html"];

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
        case 3: document.getElementById("sliderVASHungry").value = getRandomNumber(0,100); break;
        case 4:
            slideShowInit();
            break;
        default: console.log("form " + progress + " needs no setup"); break;
    }
}

function saveFormValues(index) {
    switch (index) {
        case 0: answers.id = document.getElementById("enterId").value; break;
        case 1: answers.lastEatTime = document.getElementById("lastEat").value; break;
        case 3: answers.hunger = document.getElementById("sliderVASHungry").value; break;
        default: console.log("Nothing to save for form " + index); break;
    }
}