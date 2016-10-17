var REQUEST_SURVEYS = 'REQUEST_SURVEYS',
	RECEIVE_SURVEYS = 'RECEIVE_SURVEYS';

function requestSurveys () {

	return {
		type: REQUEST_SURVEYS
	};

}

function receiveSurveys (surveyList) {

	return {
		type: RECEIVE_SURVEYS,
		surveys: surveyList
		//list: json.data.children.map(child => child.data),
	};

}

function fetchSurveys () {

	return function (dispatch) {

		/**
		 * Where does this live?
		 */
		var url = 'https://sdc-survey-registry.herokuapp.com';

		var request = jQuery.ajax(url,
			{
				dataType: "json" }
			);

		return request.then(function (data) {
			dispatch(receiveSurveys(data));
			return data;
		});
	}

}

module.exports = {

	REQUEST: requestSurveys,
	RECEIVE: receiveSurveys,

	FETCH: fetchSurveys

};