import { all, fork } from 'redux-saga/effects';
import { watchFetchCharacters } from './features/charList/charListSaga';
import { watchFetchCharactersMyCard } from './features/myCard/myCardSaga';
import { watchFetchCharactersCharCard } from './features/charCard/charCardSaga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchCharacters),
    fork(watchFetchCharactersMyCard),
    fork(watchFetchCharactersCharCard)
  ]);
}