import { takeEvery, put, call } from 'redux-saga/effects';
import {
    FETCH_POST,
    fetchPostAction,
    EXACT_POST_FETCHING_SUCCES,
    EXACT_POST_FETCH_ERROR,
    onExactPostFetchErrorAction,
    onExactPostFetchSuccesAction,
} from './actions';
import { PostService } from '../../services';

function* fetchExacPost(action: fetchPostAction) {
    try {
        console.log('action', action);
        const api = new PostService();
        const data = yield call(api.getExactPost, action.id);
        console.log('data', data);
        yield put<onExactPostFetchSuccesAction>({
            type: EXACT_POST_FETCHING_SUCCES,
            post: data,
        });
    } catch (e) {
        console.log('e.response', e.response);
        yield put<onExactPostFetchErrorAction>({
            type: EXACT_POST_FETCH_ERROR,
            error: e,
        });
    }
}

export function* exactPostSaga() {
    yield takeEvery(FETCH_POST, fetchExacPost);
}
