import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const countryInput = document.getElementById('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

// countryInput.addEventListener('input', event => {

// });

function renderCountryList(countries) {
  let countryListMarkup = '';
  const params = new URLSearchParams({
    name: name.official,
    capital: capital,
    population: population,
    flags: flags,
    languages: [],
  });
  fetch(fetchCountries + '/' + params)
    .then(response => response.json())
    .then(countries => {
      country.forEach(country => {
        countryListMarkup += `<li>
        <h3>${country.name.official}</h3>
        <h4>${country.flags}</h4>
        <h4>${country.capital}</h4>
        <h4>${country.population}</h4>
        <h4>${country.languages}</h4>
      </li>`;
      });
      countryInfo.innerHTML = countryListMarkup;
    });
}

// function fetchCountries(name) {
//   fetch('https://restcountries.com/v3.1/name/')
//     .then(response => {
//       response.json();
//     })
//     .then(countries => {
//       const countryName = countries;
//       console.log(countries);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

function fetchCountries() {
  const countryName =
    'https://restcountries.com/v3.1/name/' +
    countryInput.value.trim() +
    '?fields=name,capital,population,flags,languages';
  return fetch(`${countryName}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
