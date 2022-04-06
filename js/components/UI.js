export default class UI {
	constructor() {
		this.location = document.getElementById('weather-location');
		this.description = document.getElementById('weather-description');
		this.string = document.getElementById('weather-string');
		this.humidity = document.getElementById('weather-humidity');
		this.wind = document.getElementById('weather-wind');
		this.alert = document.getElementById('message-error');
	}

	getRender(weather) {
		this.location.textContent = `${weather.name} / ${weather.sys.country}`;
		this.description.textContent = weather.weather[0].description;
		this.string.textContent = weather.main.temp + ' °C';
		this.humidity.textContent = 'Humidity: ' + weather.main.humidity + ' %';
		this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
	}

	showAlert(message) {
		this.alert.classList.add('alert');
		this.alert.textContent = message;
		setTimeout(() => {
			this.alert.classList.remove('alert');
			this.alert.textContent = '';
		}, 2500);
	}
}
