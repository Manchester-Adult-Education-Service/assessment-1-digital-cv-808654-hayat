
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

document.getElementById("copyright").textContent=new Date().getFullYear()


quoteBtn.addEventListener('click', function() {
    quoteText.textContent = "Fetching....";
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;
    })
    .catch(error => {quoteText.textContent = "Could not connect to the quote server."});   
});
