function getAllCollectionExercises () {

	var url = window.config.app.endpoints["sdc-business-response-management"];

	return jQuery.ajax(url + '/collection-exercises',
		{
			dataType: "json"
		}
	);
}

module.exports = {
	collectionExercises: {
		getAll: getAllCollectionExercises
	}
};