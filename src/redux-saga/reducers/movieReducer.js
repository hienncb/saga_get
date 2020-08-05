const { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE } = require("../action/actionTypes");


const movieReducer = (movie = [], action)=>{
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedMovie;
        case FETCH_FAILED:
            return [];
        case ADD_MOVIE:
            return[
                ...movie,
                action.newMovie
            ]
        default:
            break;
    }
}
export default movieReducer;