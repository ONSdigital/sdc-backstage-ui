function getAllCollectionExercises () {

	var url = window.config.app.endpoints["sdc-business-response-management"];

	return jQuery.ajax(url + '/collection-exercises',
		{
			dataType: "json"
		}
	);
}

function saveCollectionExercise (data) {

	var url = window.config.app.endpoints["sdc-business-response-management"];

	return jQuery.ajax(url + '/collection-exercises',
		{
			method: "POST",
			data: JSON.stringify(data),
			dataType: "json",
			contentType: "application/json"
		}
	);
}

function getCollectionExercise (id) {

	var url = window.config.app.endpoints["sdc-business-response-management"];

	return jQuery.ajax(url + '/collection-exercises/'+id,
		{
			dataType: "json"
		}
	);

}

module.exports = {
	collectionExercises: {
		getAll: getAllCollectionExercises,
		saveCollectionExercise: saveCollectionExercise,
		get: getCollectionExercise
	}
};