import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchCharsSuccess, fetchCharsError, fetchCharsRequest,
         fetchCharRequest, fetchCharSuccess, fetchCharError, 
         getCharsRequest, getCharsSuccess, getCharsError } from './features/counter/counterSlice'
import { getCharList, getChar, getChars } from './functions'


// worker saga
function* fetchCharsWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getCharList, action.payload)
    yield put(fetchCharsSuccess(data))
  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       if (e.status === 404) console.log("No data found");
    }
    yield put(fetchCharsError())
  }
}

function* fetchCharWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getChar, action.payload);
    console.log("data", data);
    yield put(fetchCharSuccess(data));
  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       if (e.status === 404) console.log("No data found");
    }
    yield put(fetchCharError())
  }
}

function* getCharsWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getChars, action.payload);
    console.log("data", data);
    yield put(getCharsSuccess(data));
  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       if (e.status === 404) console.log("No data found");
    }
    yield put(getCharsError())
  }
}
// watcher saga
export function* watchFetchCharacters() {
  yield takeLatest(fetchCharsRequest, fetchCharsWorker);
  yield takeLatest(fetchCharRequest, fetchCharWorker);
  yield takeLatest(getCharsRequest, getCharsWorker);
}

export default watchFetchCharacters