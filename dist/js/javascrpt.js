/* questions in array form  */
let quests = [{
        id: 1,
        question: "What is the full form of CPU ?",
        answer: "Central Processing Unit",
        options: [
            "Central Processing Unit",
            "Compress Partial Unit",
            "Compact Parallel Universe",
            "Commercial Parallel Unit"
        ]
    },
    {
        id: 2,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Acurate Machine",
            "Red Accessible Module",
            "Random Access Memory",
            "Redesign All Machine"
        ]
    },
    {
        id: 3,
        question: "Who is the father of computer ?",
        answer: "Charles Babage",
        options: [
            "Rutherford",
            "Ray Tomilson",
            "Charles Babage",
            "Adolf Hitller"
        ]
    }
]

window.onload = function() {
    show(0)
}

/* sum=bmit function with session */
function submitForm(e) {
    /* prevent auto submit or hold the output screen of console */
    e.preventDefault();
    /* get the name of the entry */
    let name = document.forms["welcome_form"]["name"].value;
    /* string the value in the local offline database only for session not permanently */
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";

    console.log(name)
}

let count = 0;
score = 0;

function next() {
    /* user quiz page name show */
    let uname = sessionStorage.getItem("name");
    document.querySelector(".username").innerHTML = uname;

    /* get selected option value */
    let choosenAnswer = document.querySelector("li.option.active").innerHTML;

    /* matching the answer with selected option's value */
    if (choosenAnswer == quests[count].answer) {
        score = score + 10;
        sessionStorage.setItem("score", score)
    }



    /* if option length is fulfilled then it reder to scoreboard page */
    if (count == quests.length - 1) {
        /* set timer in session storage */
        sessionStorage.setItem("time", `${min}m : ${sec}s`)
        location.href = "scroeBoard.html"
        clearInterval(takenTime);
        return;
    }
    count++;
    show(count)
}

function show(count) {
    let question = document.getElementById("questions");
    question.innerHTML = `
        <h2>Q${quests[count].id}. ${quests[count].question}</h2>
        <ul class="option_group">
            <li class="option">${quests[count].options[0]}</li>
            <li class="option">${quests[count].options[1]}</li>
            <li class="option">${quests[count].options[2]}</li>
            <li class="option">${quests[count].options[3]}</li>
        </ul>
        `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active")
        }
    }
}


let uname = sessionStorage.getItem("name");
let points = sessionStorage.getItem("score");
let timeShow = sessionStorage.getItem("time")
document.querySelector(".username").innerHTML = uname;
document.querySelector(".scores").innerHTML = points;
document.querySelector(".time").innerHTML = timeShow;