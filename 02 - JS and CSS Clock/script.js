const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegress = (seconds * 6)+90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;

    const min = now.getMinutes();
    const minDegress = ((min / 60) * 360) + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minDegress}deg)`;

    const hour = now.getHours();
    const hourDegress = ((hour / 12) * 360) + ((min/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegress}deg)`;

}

setInterval(setDate, 1000);

