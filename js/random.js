function getRandomNumber() {
    var minNumber = 1; // The minimum number you want
    var maxNumber = 100; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    return randomnumber.toString();
}