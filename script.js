let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; // Math.random will return a random number between 0 and 1; multiplied by the number of quotes retrieved by the api so that will never run out; Math.floor will drop any decimals and return an integer
    console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();



// IF I WANT TO GET QUOTES FROM quotes.js REPLACE EVERYTHING WITH:
// function newQuote() {
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// newQuote();