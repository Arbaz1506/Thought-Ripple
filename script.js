let quoteText = document.getElementById("quote-text");
let authorText = document.getElementById("author");
let btn = document.getElementById("quote-btn");
let load = document.getElementById("loader");

async function getQuote() {
    try {
        load.style.display = "block";
        quoteText.innerText = "";
        authorText.innerText = "";



        const response = await fetch("https://quotes-api-self.vercel.app/quote");
        const data = await response.json();

        quoteText.innerText = data.quote;
        authorText.innerText = `${data.author}`;
    } catch (error) {
        quoteText.innerText = "Failed to load quote.";
        authorText.innerText = "";
    }
    finally {

        load.style.display = "none";
    }




}
btn.addEventListener("click", getQuote);
getQuote();