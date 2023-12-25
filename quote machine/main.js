var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);
newQuoteButton.addEventListener('click', color);

function color(){
    newQuoteButton.style.color = 'black';
    newQuoteButton.style.background = 'grey';
}

var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote(){
    fetch(endpoint)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            displayQuote(data.message);
        })
        .catch(function(){
            console.log("An error occured");
        });   
}

function displayQuote(quote){
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

getQuote();