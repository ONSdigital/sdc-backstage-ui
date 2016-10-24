var assign = require('object-assign');

function getSurvey (surveys, collectionExerciseItem) {

	return assign({}, collectionExerciseItem, {
		survey: _.find(surveys, function (surveyItem) {
			return surveyItem.reference === collectionExerciseItem.survey_ref;
		})
	});
}

module.exports = {
	getSurvey: getSurvey
};