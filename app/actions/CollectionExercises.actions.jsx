var collectionExercisesService = require('../services/sdc-business-response-management.jsx');

var ADD = 'ADD_COLLECTION_EXERCISE',
    CHANGE_PERIOD = 'ADD_COLLECTION_EXERCISE_CHANGE_PERIOD',
    RECEIVE_ALL = 'RECEIVE_ALL_COLLECTION_EXERCISES',
    REQUEST_ALL = 'REQUEST_ALL_COLLECTION_EXERCISES',
    SAVED = 'SAVED_COLLECTION_EXERCISE',
    RECEIVE_SINGLE = 'REQUEST_COLLECTION_EXERCISE_DETAILS',
    FILTER = 'FILTER_COLLECTION_EXERCISE',
    STORE_UPDATE = 'STORE_UPDATE_COLLECTION_EXERCISE',
    STORE_ADD = 'STORE_ADD_COLLECTION_EXERCISE';

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

function saveCollectionExercise (data) {


    return function (dispatch) {

        return collectionExercisesService.collectionExercises.saveCollectionExercise({
            periods: data.periods,
            survey_ref: data.surveyReference
        })
        .then(function (data) {
            dispatch(savedCollectionExercise());
            return data;
        });
    };

}

function savedCollectionExercise () {

    return {
        type: SAVED
    };

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
    };

}

function fetchCollectionExercise (id) {

    return function (dispatch) {

        return collectionExercisesService.collectionExercises.get(id)
            .then(function (data) {
                dispatch(receiveCollectionExercise(data));
                return data;
            });
    };

}

function uploadCollectionExerciseSample (id, formData) {

    return function (dispatch) {

        return collectionExercisesService.collectionExercises.uploadSample(id, formData)
            .then(function (data) {
                dispatch(receiveCollectionExercise(data));
                return data;
            });

    };

}

function storeUpdateCollectionExercise (collectionExercise) {

    return {
        type: STORE_UPDATE,
        collectionExercise: collectionExercise
    };

}

function storeAddCollectionExercises (collectionExercises) {

    return {
        type: STORE_ADD,
        collectionExercises: collectionExercises
    };

}

function changeCollectionExerciseState (id, state) {

    return function (dispatch) {

        return collectionExercisesService.collectionExercises.changeState(id, state)
            .then(function (data) {
                dispatch(receiveCollectionExercise(data));
                return data;
            });

    };

}

function receiveCollectionExercise (collectionExercise) {

    return {
        type: RECEIVE_SINGLE,
        collectionExercise: collectionExercise
    };

}

module.exports = {

    ADD: addCollectionExercises,

    /**
     * Specific to Add collection exercise,
     * should this be here?
     */
    TOGGLE_PERIOD: changeCollectionExercisesPeriod,

    STORE_UPDATE: storeUpdateCollectionExercise,
    STORE_ADD: storeAddCollectionExercises,

    REQUEST_ALL: requestAllCollectionExercises,
    RECEIVE_ALL: receiveAllCollectionExercises,
    FETCH_ALL: fetchAllCollectionExercises,

    FETCH: fetchCollectionExercise,

    SAVE_COLLECTION_EXERCISE: saveCollectionExercise,
    UPLOAD_COLLECTION_EXERCISE_SAMPLE: uploadCollectionExerciseSample,
    CHANGE_COLLECTION_EXERCISE_STATE: changeCollectionExerciseState,

    UI_FILTER: filterCollectionExerciseList

};