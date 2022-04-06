import Store from './components/Store.js';
import UI from './components/UI.js';
import Weather from './components/Weather.js';

const store = new Store();
const {city, countryCode} = store.getLocationData();

const weather = new Weather(city, countryCode);
const ui = new UI();

const fetchWeather = async () => {
	const data = await weather.getWeather();

	ui.getRender(data);
};

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// const data = Object.fromEntries(new FormData(e.target));
	const {city, countryCode} = Object.fromEntries(new FormData(form));
	if (city === '' || countryCode === '') {
		ui.showAlert('Ingrese una ciudad o código correctamente!');
		form.city.focus();
	} else {
		weather.changeLocation(city, countryCode);
		store.setLocationData(city, countryCode);
	}
	fetchWeather();
	form.reset();
});

addEventListener('DOMContentLoaded', fetchWeather);
