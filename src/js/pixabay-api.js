export async function fetchImages(query, perPage = 12) {
  const searchParams = new URLSearchParams({
    key: '44998752-61a12b7504481d46e62cdda30',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
    per_page: perPage,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => {
      if (!response.length) {
        return response.hits;
      }
    })
    .catch(error => console.log(error));
}
