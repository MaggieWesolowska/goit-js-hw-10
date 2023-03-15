import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const form = document.getElementById('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const COUNTRY_NAME_URL = 'https://restcountries.com/v3.1/all/name';

// form.addEventListener('input', event => {

// });

function showCountries(countries) {
  let countryListMarkup = '';
  const params = new URLSearchParams({
    name: name.official,
    capital: capital,
    population: population,
    flags: flags,
    languages: [],
  });
  fetch('https://restcountries.com/v3.1/all' + '/' + params)
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

function fetchCountries(name) {
  fetch(COUNTRY_NAME_URL)
    .then(response => {
      response.json();
    })
    .then(countries => {
      const countryName = countries;
      console.log(countries);
    })
    .catch(error => {
      console.log(error);
    });
}
