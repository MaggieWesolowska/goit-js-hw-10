import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const fetchCountries = fetch(
  'https://restcountries.com/#api-endpoints-v3-name'
);

const form = document.getElementById('#search-box');

fetchCountries
  .then(response => {
    const countriesData = response.json();
    console.log(countriesData);
    return countriesData;
  })
  .then(countries => {
    console.log(countries);
  })
  .catch(error => {
    console.log(error);
  });
