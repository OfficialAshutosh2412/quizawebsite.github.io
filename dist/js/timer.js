/* timer js */

/* set the time to 0 using Date() current time is zero now means hh-mm-ss all is set to 0*/
let date = new Date(new Date().setTime(0))

/* get current time  */
let time = date.getTime()

/* get seconds */
let sec = Math.floor((time % (100 * 60)) / 1000);

/* get minutes */
let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/* time set to 0 */
let incsTime = 0;


/* increment time in every one second */
let takenTime = setInterval(function() {
    if (sec < 59) {
        sec++;
    } else {
        sec = 0;
        min++;
    }
    let secFormat = sec < 10 ? `0${sec}` : `${sec}`;
    let minFormat = min < 10 ? `0${min}` : `${min}`;
    document.querySelector(".timer").innerHTML = `${minFormat} : ${secFormat}`;
}, 1000);