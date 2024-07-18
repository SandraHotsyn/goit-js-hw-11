import { fetchImages } from './js/pixabay-api';
import {
  clearGallery,
  displayImages,
  showLoading,
  hideLoading,
  notFoundMessage,
  errorMessage,
} from './js/render-functions.js';

document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') {
    return;
  }
  clearGallery();
  showLoading();
  const perPage = 16;
  try {
    const images = await fetchImages(query, perPage);
    if (images.length === 0) {
      notFoundMessage();
    } else {
      displayImages(images);
    }
  } catch (error) {
    errorMessage(error);
  } finally {
    hideLoading();
  }
});
