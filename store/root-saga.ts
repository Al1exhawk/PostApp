import { exactPostSaga } from "./exact-post/saga";
import { newPostSaga } from "./new-post/saga";
import { postsSaga } from "./posts/saga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([postsSaga(), newPostSaga(), exactPostSaga()]);
}
