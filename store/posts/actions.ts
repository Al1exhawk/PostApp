import { Action, Dispatch } from "redux";
import { Post } from "../../models";
import axios, { AxiosResponse } from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCHING_SUCCES = "FETCHING_SUCCES";
export const FETCH_ERROR = "FETCH_ERROR";

export interface fetchPostsAction extends Action {
  type: typeof FETCH_POSTS;
}
export interface onFetchSuccesAction extends Action {
  type: typeof FETCHING_SUCCES;
  posts: Post[];
}
export interface onFetchErrorAction extends Action {
  type: typeof FETCH_ERROR;
  error: any;
}

export type postsActions =
  | fetchPostsAction
  | onFetchSuccesAction
  | onFetchErrorAction;

export const fetchPosts = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_POSTS } as fetchPostsAction);
  try {
    const serverResponse = await axios.get<null, AxiosResponse<Post[]>>(
      "https://simple-blog-api.crew.red/posts",
      {
        responseType: "json"
      }
    );
    const data = serverResponse.data;
    dispatch({ type: FETCHING_SUCCES, posts: data } as onFetchSuccesAction);
  } catch (e) {
    dispatch({ type: FETCH_ERROR, error: e.response } as onFetchErrorAction);
  }
};
