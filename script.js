const quoteContainer = document.getElementById("quote-container");
const newQuotes = document.getElementById("new-quote");
const twit = document.getElementById("twitter");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const loader = document.getElementById("loader");

let quotes = [];

// loader functions
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Fetching the quotes
async function fetchQuotes() {
    loading();
    const APIUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(APIUrl);
        quotes  = await response.json();
        getQuotes();
    } catch (error) {
        console.log("Can't fetch the API");
    }
}
//  function to get new quotes
function getQuotes() {
    loading();
    // getting random number
    let randomNum = Math.ceil(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomNum].text;
    authorText.textContent = quotes[randomNum].author;
    complete();

}

function twitter() {
    let twitURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${ authorText.textContent}`;
    window.open(twitURL,"_blank");
}



// fetch request
fetchQuotes();

newQuotes.addEventListener("click",getQuotes);
twit.addEventListener("click",twitter);



