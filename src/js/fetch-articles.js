function fetchArticles(searchQuery) {
  const url = `http://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.hits);
}

export default fetchArticles;
