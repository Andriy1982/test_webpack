const apiKey = '66d7eac8ead5496ab74c4caf5fcc06a1';
// const url = `https://newsapi.org/v2/top-headlines?apiKey=${key}`;

console.log('Hello');

function fetchArticles(searchQuery) {
  const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}`;
  const options = {
    headers: {
      Authorization: apiKey,
    },
  };
  fetch(url);
}

console.log(fetchArticles());
