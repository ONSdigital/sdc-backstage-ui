var ADD = 'ADD_COLLECTION_EXERCISE',
    CHANGE_PERIOD = 'ADD_COLLECTION_EXERCISE_CHANGE_PERIOD';

function addCollectionExercises () {

    return {
        type: ADD,
        text: 'Add collection exercise'
    };

}

function changeCollectionExercisesPeriod (type) {

    return {
        type: CHANGE_PERIOD,
        periodType: type
    }

}

module.exports = {

    ADD: addCollectionExercises,
    TOGGLE_PERIOD: changeCollectionExercisesPeriod

};