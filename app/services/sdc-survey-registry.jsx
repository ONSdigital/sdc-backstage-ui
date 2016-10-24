function getSurveys () {

	var url = window.config.app.endpoints["sdc-survey-registry"];

	return jQuery.ajax(url,
		{
			dataType: "json",
			/*dataFilter: function (res) {
				console.log(['something']);

				return _.uniq(JSON.parse(res), true, function (item) {
					return item.reference;
				});
				/!*return _.uniq(res, true, function (item) {
					return item.reference;
				});*!/
			}*/
		}
	)

	/**
	 * Hack - registry is returning duplicate objects
	 */
	/*.then(function (res) {
		console.log('here');
		return [];
	})*/;
}

module.exports = {
	getSurveys: getSurveys
};