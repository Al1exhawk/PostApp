import { takeEvery, put, call } from "redux-saga/effects";
import {
  FETCH_POST,
  fetchPostAction,
  EXACT_POST_FETCHING_SUCCES,
  EXACT_POST_FETCH_ERROR,
  onExactPostFetchErrorAction,
  onExactPostFetchSuccesAction
} from "./actions";
import { PostService } from "../../services";

function* fetchExacPost(action: fetchPostAction) {
  try {
    const api = new PostService();
    const data = yield call(api.getExactPost, action.id);
    yield put<onExactPostFetchSuccesAction>({
      type: EXACT_POST_FETCHING_SUCCES,
      post: data
    });
  } catch (e) {
    yield put<onExactPostFetchErrorAction>({
      type: EXACT_POST_FETCH_ERROR,
      error: e
    });
  }
}

export function* exactPostSaga() {
  yield takeEvery(FETCH_POST, fetchExacPost);
}
