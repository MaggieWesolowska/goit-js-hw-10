import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const countryInput = document.getElementById('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryInput.addEventListener(
  'input',
  debounce(event, DEBOUNCE_DELAY => {
    fetchCountries(name);
  })
);

const fetchCountries = name => {
  const countryName =
    'https://restcountries.com/v3.1/name/' +
    countryInput.value.trim() +
    '?fields=name,capital,population,flags,languages';
  return fetch(countryName).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    response.json();
  });
};
