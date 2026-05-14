import { call, put, takeLatest } from 'redux-saga/effects'
import { getCharsRequest, getCharsSuccess } from './myCardSlice'
import { getChars } from './myCardApi'
import { toast } from 'react-toastify';


function* getCharsWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getChars, action.payload);
    console.log("data!!!!", data);
    yield put(getCharsSuccess(data));
  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       yield toast.error("Ошибка! " + e.status); 
    }
  }
}

// watcher saga
export function* watchFetchCharactersMyCard() {
  yield takeLatest(getCharsRequest, getCharsWorker);
}

export default watchFetchCharactersMyCard