import { put, takeLatest } from 'redux-saga/effects'
import { Api } from './api'
import { FETCH_SUCCEEDED, FETCH_FAILED, FETCH_MOVIES } from '../action/actionTypes';

function* fetchMovie(){
    try {
        const receiveMovie = yield Api.getMovie();
        yield  put({type: FETCH_SUCCEEDED, receiveMovie: receiveMovie})
    } catch (error) {
        yield put({type: FETCH_FAILED, error})
    }
}

export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIES, fetchMovie)
}