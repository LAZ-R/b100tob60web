const timeInput = document.querySelector("#timeInput");

const calculateButton = document.querySelector("#calculateButton");

const finalAnswer = document.querySelector('#finalAnswer');

calculateButton.addEventListener('click', () => {
    let totalTime = timeInput.value;
    let timeSplit = totalTime.split(".");
    let heures = timeSplit[0];
    let minutes100 = timeSplit[1];
    let minutes100String = minutes100.toString(10);
    let len = minutes100String.length;
    let minutes100Int;
    if (len == 1) {
        minutes100Int = Number(minutes100);
        minutes100Int *= 10;
    } else {
        minutes100Int = Number(minutes100);
    }
    let minutes60 = Math.round((minutes100Int / 100) * 60);
    let minutes60String = minutes60.toString(10);
    let len02 = minutes60String.length;
    if (len02 == 1) {
        finalAnswer.innerText = (heures + " H 0" + minutes60String);
    } else {
        finalAnswer.innerText = (heures + " H " + minutes60String);
    }
});
