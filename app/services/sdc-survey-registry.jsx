var url = 'https://sdc-survey-registry.herokuapp.com';

function getSurveys () {

	return jQuery.ajax(url,
		{
			dataType: "json"
		}
	);
}

module.exports = {
	getSurveys: getSurveys
};