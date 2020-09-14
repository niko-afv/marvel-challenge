import axios from 'axios'

export default {
	baseURL: 'http://gateway.marvel.com/v1/public/',
	apiKey: 'c10e57b921370f043fe759c4aa7629a1',
	getCharacters: function() {
		return axios
			.get(this.baseURL + 'characters', {
				params: {
					apikey: this.apiKey,
					limit: 30
				}
			}).then(response => {
				return response.data.data.results;
			})
	}
}