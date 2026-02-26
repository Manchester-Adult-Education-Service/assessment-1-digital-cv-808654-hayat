const nameHeading = document.querySelector("h1");

const hour= new Date().getHours();

if (hour<12) {
    nameHeading.textContent= "Good Morning, Hayat";
} 
else if (hour < 18) {
    nameHeading.textContent= "Good Afternoon, Hayat";
} else {
    nameHeading.textContent= "Good evening, Hayat";
}

console.log("The current hour is:" + hour);


