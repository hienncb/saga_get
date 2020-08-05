import { call, all } from 'redux-saga/effects'
import { watchFetchMovies } from './moviSaga'

export default function* rootSaga(){
    yield call(watchFetchMovies)
}