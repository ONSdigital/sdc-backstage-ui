function getSurveys () {

	var url = window.config.app.endpoints["sdc-survey-registry"];

	return jQuery.ajax(url,
		{
			dataType: "json"
		}
	)
	/**
	 * Hack - registry is returning duplicate objects
	 */
	.then(function (res) {
		return _.unique(res, false, function (item) {
			return item.reference;
		})
	});
}

module.exports = {
	getSurveys: getSurveys
};