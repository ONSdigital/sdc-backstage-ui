var surveyRegistry = require('../services/sdc-survey-registry.jsx');

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
	};

}

function fetchSurveys () {

	return function (dispatch) {

		return surveyRegistry.getSurveys()
			.then(function (data) {
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