const clock = document.getElementById("clock");

clock.innerText = getTime();

setInterval(() => {
  clock.innerText = getTime();
}, 1000);

setInterval(() => {
  clock.style.color = new Date().getMilliseconds() % 2 == 0 ? 'red' : 'black';
}, 100);


function getTime() {
    return new Date().toGMTString();
}