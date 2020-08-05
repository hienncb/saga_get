import { FETCH_FAILED, FETCH_MOVIES, ADD_MOVIE, FETCH_SUCCEEDED } from "./actionTypes"


export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort
    }
}

export const addMoviesAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        newMovie
    }
}

export const fetchSuccessAction = (receiveMovie) => {
    return {
        type: FETCH_SUCCEEDED,
        receiveMovie
    }
}

export const fetchFailedAction = (erro) => {
    return {
        type: FETCH_FAILED,
        error
    }
}