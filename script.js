const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const surahText = document.getElementById('surah');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

// let apiQuotes = []; not used in this version

// Show Loading
function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
    
}

// Show new Quote
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from localquotes array
    const quote = localquotes[Math.floor(Math.random() * localquotes.length)];

    //  Check if Author field is blank and replace it with 'Unknown'
    surahText.textContent = quote.surah; 
    
    // Check Quote length to determing the styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    // Set Quote, Hide Loader
    quoteText.textContent  = quote.text;
    removeLoadingSpinner();
}

// Get Quotes from API
async function getQuotes() {
    showLoadingSpinner();
    newQuote();
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl =  `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${surahText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();