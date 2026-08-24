import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { fetchCharRequest, fetchCharSuccess, fetchCharError } from './charCardSlice'
import { getChar } from './charCardApi'
import { toast } from 'react-toastify';


function* fetchCharWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getChar, action.payload);
    yield delay(500);
    yield put(fetchCharSuccess(data));

  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
        yield toast.error("Ошибка! " + e.status, { autoClose: false }); 
    }
    yield put(fetchCharError());
  }
}

// watcher saga
export function* watchFetchCharactersCharCard() {
  yield takeLatest(fetchCharRequest, fetchCharWorker);
}


export default watchFetchCharactersCharCard