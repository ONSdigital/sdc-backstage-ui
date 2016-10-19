var collectionExercisesService = require('../services/sdc-business-response-management.jsx');

var ADD = 'ADD_COLLECTION_EXERCISE',
    CHANGE_PERIOD = 'ADD_COLLECTION_EXERCISE_CHANGE_PERIOD',
    RECEIVE_ALL = 'RECEIVE_ALL_COLLECTION_EXERCISES',
    REQUEST_ALL = 'REQUEST_ALL_COLLECTION_EXERCISES',
    FILTER = 'FILTER_COLLECTION_EXERCISE';

function addCollectionExercises () {

    return {
        type: ADD,
        text: 'Add collection exercise'
    };

}

function filterCollectionExerciseList (status) {

    return {
        type: FILTER,
        status: status
    };

}

function changeCollectionExercisesPeriod (type) {

    return {
        type: CHANGE_PERIOD,
        periodType: type
    }

}

function requestAllCollectionExercises () {

    return {
        type: REQUEST_ALL
    };

}

function receiveAllCollectionExercises (collectionExerciseList) {

    return {
        type: RECEIVE_ALL,
        collectionExercises: collectionExerciseList
    };

}

function fetchAllCollectionExercises () {

    return function (dispatch) {

        return collectionExercisesService.collectionExercises.getAll()
            .then(function (data) {
                dispatch(receiveAllCollectionExercises(data));
                return data;
            });
    }

}

module.exports = {

    ADD: addCollectionExercises,

    /**
     * Specific to Add collection exercise,
     * should this be here?
     */
    TOGGLE_PERIOD: changeCollectionExercisesPeriod,

    REQUEST_ALL: requestAllCollectionExercises,
    RECEIVE_ALL: receiveAllCollectionExercises,
    FETCH_ALL: fetchAllCollectionExercises,

    UI_FILTER: filterCollectionExerciseList

};