
const nameHeading = document.querySelector("h1");

const hour= new Date().getHours();

const time = new Date().toLocaleString();


const quoteBtn = document.getElementById('quote-btn');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');



document.getElementById("time").textContent= time

if (hour<12) {
    nameHeading.textContent= "Good Morning, Hayat";
} 
else if (hour < 18) {
    nameHeading.textContent= "Good Afternoon, Hayat";
} else {
    nameHeading.textContent= "Good evening, Hayat";
}

console.log("The current hour is:" + hour);

/*const personalStatement= document.querySelector(`.highlight`);
personalStatement.style.backgroundColor = "blue";*/

const currentYear = new Date().getFullYear();
const copyright = document.getElementById('copyright');
copyright.textContent = `Copyright © ${currentYear} Hayat Bekhouche`;



quoteBtn.addEventListener('click', function() {
    quoteText.textContent = "Fetching....";
    document.body.style.cursor = "wait";
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;
        document.body.style.cursor = "default";
    })
    .catch(error => {quoteText.textContent = "Could not connect to the quote server."});
        document.body.style.cursor = "default";
        console.error("Fetch error:", error);
});


const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById('advice-btn');

adviceBtn.addEventListener('click', function() {
    adviceText.textContent = "Consulting the experts...";
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceText.textContent = data.slip.advice;
        })
        .catch(err => {
            adviceText.textContent = "The oracle is busy. Try again soon.";
        });
});


window.addEventListener("load", () => {
    quoteBtn.click();
    adviceBtn.click();
})