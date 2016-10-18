var url = 'https://test-sdc-business-response-management.cfapps.io';

function getAllCollectionExercises () {

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