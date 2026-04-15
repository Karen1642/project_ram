import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchCharsSuccess, fetchCharsError } from './features/counter/counterSlice'
import { getCharList } from './functions'


// worker saga
function* fetchCharsWorker(action) {
  try {
    console.log("action param:", action.payload);
    const data = yield call(getCharList, action.payload)
    yield put(fetchCharsSuccess(data))
  } catch (e) {
    console.log("error code:", e);
    yield put(fetchCharsError())
  }
}

// watcher saga
export function* watchFetchCharacters() {
  yield takeLatest('counter/fetchCharsRequest', fetchCharsWorker)
}

export default watchFetchCharacters