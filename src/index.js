import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const countryInput = document.getElementById('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const COUNTRIES_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages';

// countryInput.addEventListener('input', event => {
//   fetchCountries()
//     .then(country => renderCountryList(countries))
//     .catch(error => console.log(error));
// });

const fetchCountries = name => {
  const countryName =
    'https://restcountries.com/v3.1/name/' +
    countryInput.value.trim() +
    '?fields=name,capital,population,flags,languages';
  return fetch(`${countryName}`)
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
};
