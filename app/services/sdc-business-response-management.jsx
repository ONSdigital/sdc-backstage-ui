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

function uploadCollectionExerciseSample (opts) {

	var url = window.config.app.endpoints["sdc-business-response-management"];

	return jQuery.ajax(url + '/collection-exercises/'+opts.collectionExerciseId, {
		type : 'PUT',
		data : opts.formData,
		processData: false,
		contentType: false,
		success : function(data) {
			console.log('Dispatch to change redux state with this data!', data);
		}
	});

}

function changeCollectionExerciseState (id, state) {

	var url = window.config.app.endpoints["sdc-business-response-management"];

	return jQuery.ajax(url + '/collection-exercises/'+id,
		{
			method: "PUT",
			data: JSON.stringify({ "desired_state": state }),
			dataType: "json",
			contentType: "application/json"
		}
	);

}

module.exports = {
	collectionExercises: {
		getAll: getAllCollectionExercises,
		saveCollectionExercise: saveCollectionExercise,
		get: getCollectionExercise,
		uploadSample: uploadCollectionExerciseSample,
		changeState: changeCollectionExerciseState
	}
};