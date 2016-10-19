function getSurveys () {

	var url = window.config.app.endpoints["sdc-survey-registry"];

	return jQuery.ajax(url,
		{
			dataType: "json"
		}
	);
}

module.exports = {
	getSurveys: getSurveys
};