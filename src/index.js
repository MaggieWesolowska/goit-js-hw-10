import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const countryInput = document.getElementById('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryInput.addEventListener('input', () => {
  fetchCountries()
    .then(countries => renderCountry(countries))
    .catch(error => console.log(error));
});

function fetchCountries(name) {
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
}

function renderCountry() {
  const markup = countries
    .map(({ name.official, capital, population, flags, languages }) => {
      return `<div class="country-card">
          <p>${official}</p>
          <p>${capital}</p>
          <p>${population}</p>
          <p>${flags}</p>
          <p>${languages}</p>
        </div>`;
    })
    .join('');
  countryInfo.innerHTML = markup;
}

if (data.length > 10) {
  return Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
} else if (data.length < 10 || data.length > 2) {
  return renderCountry();
} else if (data.length === 0) {
  Notiflix.Notify.warning('Oops, there is no country with that name');
}
