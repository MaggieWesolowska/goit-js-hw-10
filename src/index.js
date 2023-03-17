import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const countryInput = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryInput.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(countryInput.value.trim())
      .then(countries => {
        renderCountry(countries);
        console.log(countries);
      })
      .catch(error => {
        Notiflix.Notify.warning('Oops, there is no country with that name');
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
      });
  }, DEBOUNCE_DELAY)
);

function renderCountry(countries) {
  if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
  } else if (countries.length <= 10 && countries.length >= 2) {
    const markupList = countries
      .map(country => {
        return `
      <li><img class="img-svg" src="${country.flags.svg}">${country.name.official}</li>`;
      })
      .join('');
    countryList.innerHTML = markupList;
    countryInfo.innerHTML = '';
  } else if (countries.length === 1) {
    const markupCountry = countries
      .map(country => {
        return `<div class="country-card">
      <img class="img-svg" src="${country.flags.svg}">
          <p>${country.name.official}</p>
          <p>${country.capital[0]}</p>
          <p>${country.population}</p>
          <p>${Object.values(country.languages)}</p>
        </div>`;
      })
      .join('');
    countryInfo.innerHTML = markupCountry;
    countryList.innerHTML = '';
  }
}
