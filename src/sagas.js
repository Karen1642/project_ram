import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { getCharsRequest, getCharsSuccess } from './features/myCard/myCardSlice'
import { fetchCharRequest, fetchCharSuccess } from './features/charCard/charCardSlice'
import { fetchCharsSuccess, fetchCharsRequest } from './features/charList/charListSlice'
import { getCharList, getChar, getChars } from './functions'


// worker saga
function* fetchCharsWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getCharList, action.payload);
    console.log("data", data);
    yield put(fetchCharsSuccess(data));
  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       if (e.status === 404) console.log("No data found");
    }
    yield put(logError());
  }
}

function* fetchCharWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getChar, action.payload);
    console.log("data", data);
    //yield delay(500000);
    yield put(fetchCharSuccess(data));

  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       if (e.status === 404) console.log("No data found");
    }
    yield put(logError());
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
    yield put(logError());
  }
}
// watcher saga
export function* watchFetchCharacters() {
  yield takeLatest(fetchCharsRequest, fetchCharsWorker);
  yield takeLatest(fetchCharRequest, fetchCharWorker);
  yield takeLatest(getCharsRequest, getCharsWorker);
}

export default watchFetchCharacters