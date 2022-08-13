const url = `https://favqs.com/api/qotd`;
const quote = document.querySelector('#quote div:first-child');
const author = document.querySelector('#quote div:last-child');

async function getQuote() {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      quote.textContent = data.quote.body;
      author.textContent = data.quote.author;
    });
}

getQuote();
