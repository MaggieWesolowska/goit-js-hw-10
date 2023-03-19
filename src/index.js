import './css/styles.css';
import { fetchCountries } from './fetchCountries';
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
        Notiflix.Notify.failure('Oops, there is no country with that name');
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
      <li>
      <div class="list-item"><img class="list-image" src="${country.flags.svg}" width="50" height="30">
      <p class="list-title">${country.name.official}</p>
      </div>
      </li>`;
      })
      .join('');
    countryList.innerHTML = markupList;
    countryInfo.innerHTML = '';
  } else if (countries.length === 1) {
    const markupCountry = countries
      .map(country => {
        return `<div class="country-card">
        <div class="card-item">
          <img class="card-image" src="${
            country.flags.svg
          }" width="70" height="50">
          <p class="card-title">${country.name.official}</p>
        </div>
          <p><text>Capital:</text>${country.capital[0]}</p>
          <p><text>Population:</text>${country.population}</p>
          <p><text>Languages:</text>${Object.values(country.languages)}</p>
      </div>`;
      })
      .join('');
    countryInfo.innerHTML = markupCountry;
    countryList.innerHTML = '';
  }
}
