import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const COUNTRIES_API_URL = 'https://restcountries.com/#api-endpoints-v3-name';

const form = document.getElementById('#search-box');

function fetchCountries(name) {
  fetch(COUNTRIES_API_URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}
