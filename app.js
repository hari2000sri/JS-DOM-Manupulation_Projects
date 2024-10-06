let btn = document.querySelector("button");
let quote = document.querySelector(".quote");
let authorName = document.querySelector(".person-name");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
];

function genarateQuote() {
  let randomno = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomno].quote;
  authorName.innerText = quotes[randomno].author;
}

btn.addEventListener("click", genarateQuote);
