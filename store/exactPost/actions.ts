import { Action, Dispatch } from "redux";
import { exactPost } from "../../models";
import axios, { AxiosResponse } from "axios";

export const FETCH_POST = "FETCH_POST";
export const EXACT_POST_FETCHING_SUCCES = "EXACT_POST_FETCHING_FETCHING_SUCCES";
export const EXACT_POST_FETCH_ERROR = "EXACT_POST_FETCHING_FETCH_ERROR";

export interface fetchPostAction extends Action {
  type: typeof FETCH_POST;
}
export interface onExactPostFetchSuccesAction extends Action {
  type: typeof EXACT_POST_FETCHING_SUCCES;
  post: exactPost;
}
export interface onExactPostFetchErrorAction extends Action {
  type: typeof EXACT_POST_FETCH_ERROR;
  error: any;
}

export type exactPostActions =
  | fetchPostAction
  | onExactPostFetchSuccesAction
  | onExactPostFetchErrorAction;

export const fetchExactPost = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_POST } as fetchPostAction);
  try {
    const serverResponse = await axios.get<null, AxiosResponse<exactPost>>(
      `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`,
      {
        responseType: "json"
      }
    );
    const data = serverResponse.data;
    console.log("data", data);
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
