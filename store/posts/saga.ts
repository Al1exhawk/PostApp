import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCHING_SUCCES, FETCH_ERROR, FETCH_POSTS, onFetchSuccesAction, onFetchErrorAction } from './actions';
import { PostService } from '../../services';

function* fetchPosts() {
    try {
        const api = yield new PostService();
        const data = yield call(api.getAllPost);
        yield put<onFetchSuccesAction>({
            type: FETCHING_SUCCES,
            posts: data,
        });
    } catch (e) {
        yield put<onFetchErrorAction>({
            type: FETCH_ERROR,
            error: e,
        });
    }
}

export function* postsSaga() {
    yield takeEvery(FETCH_POSTS, fetchPosts);
}
