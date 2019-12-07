import { Action, Dispatch } from "redux";
import { ExactPostModel } from "../../models";
import { PostService } from "../../services";

export const FETCH_POST = "FETCH_POST";
export const EXACT_POST_FETCHING_SUCCES = "EXACT_POST_FETCHING_SUCCES";
export const EXACT_POST_FETCH_ERROR = "EXACT_POST_FETCHING_ERROR";

export interface fetchPostAction extends Action {
  type: typeof FETCH_POST;
  id: string;
}

export interface onExactPostFetchSuccesAction extends Action {
  type: typeof EXACT_POST_FETCHING_SUCCES;
  post: ExactPostModel;
}

export interface onExactPostFetchErrorAction extends Action {
  type: typeof EXACT_POST_FETCH_ERROR;
  error: any;
}

export type ExactPostActions =
  | fetchPostAction
  | onExactPostFetchSuccesAction
  | onExactPostFetchErrorAction;

export const fetchExactPost = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_POST } as fetchPostAction);
  try {
    const api = new PostService();
    const data = await api.getExactPost(id);
    dispatch({
      type: EXACT_POST_FETCHING_SUCCES,
      post: data
    } as onExactPostFetchSuccesAction);
  } catch (e) {
    dispatch({
      type: EXACT_POST_FETCH_ERROR,
      error: e.response
    } as onExactPostFetchErrorAction);
  }
};
