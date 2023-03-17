export function fetchCountries(name) {
  const countryName =
    'https://restcountries.com/v3.1/name/' +
    name +
    '?fields=name,capital,population,flags,languages';
  return fetch(countryName).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    response.json();
  });
}

// https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages
