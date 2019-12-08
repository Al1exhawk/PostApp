import { takeEvery, put, call } from 'redux-saga/effects';
import {
    CREATE_NEW_POST,
    CREATING_POST_ERROR,
    CreateNewPostAction,
    CreatingPostErrorAction,
    ResetFormAction,
    RESET_FORM_INPUTS,
} from './actions';
import { PostService } from '../../services';

function* creatNewPost(action: CreateNewPostAction) {
    try {
        const api = new PostService();
        yield call(api.createNewPost, action.newPost);
        yield put<ResetFormAction>({
            type: RESET_FORM_INPUTS,
        });
    } catch (e) {
        yield put<CreatingPostErrorAction>({
            type: CREATING_POST_ERROR,
            error: e,
        });
    }
}

export function* newPostSaga() {
    yield takeEvery(CREATE_NEW_POST, creatNewPost);
}
