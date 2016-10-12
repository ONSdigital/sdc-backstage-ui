var ADD = 'ADD_COLLECTION_EXERCISE';

function addCollectionExercises () {

    return {
        type: ADD,
        text: 'Build my first Redux app'
    };

}

module.exports = {

    ADD: addCollectionExercises

};