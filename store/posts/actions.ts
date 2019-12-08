import { Action } from 'redux';
import { PostModel } from '../../models';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCHING_SUCCES = 'FETCHING_SUCCES';
export const FETCH_ERROR = 'FETCH_ERROR';

export interface fetchPostsAction extends Action {
    type: typeof FETCH_POSTS;
}
export interface onFetchSuccesAction extends Action {
    type: typeof FETCHING_SUCCES;
    posts: PostModel[];
}
export interface onFetchErrorAction extends Action {
    type: typeof FETCH_ERROR;
    error: any;
}

export type PostsActions = fetchPostsAction | onFetchSuccesAction | onFetchErrorAction;
