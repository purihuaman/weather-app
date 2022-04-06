export default class Store {
	constructor() {
		this.city;
		this.countryCode;

		this.defaultCity = 'Lima';
		this.defaultCountry = 'pe';
	}

	setLocationData(city, countryCode) {
		localStorage.setItem('city', city);
		localStorage.setItem('countryCode', countryCode);
	}

	getLocationData() {
		if (!localStorage.getItem('city') && !localStorage.getItem('countryCode')) {
			this.city = this.defaultCity;
			this.countryCode = this.defaultCountry;
		} else {
			this.city = localStorage.getItem('city');
			this.countryCode = localStorage.getItem('countryCode');
		}

		return {
			city: this.city,
			countryCode: this.countryCode,
		};
	}
}
