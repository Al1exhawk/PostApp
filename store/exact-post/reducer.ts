import {
  EXACT_POST_FETCHING_SUCCES,
  EXACT_POST_FETCH_ERROR,
  FETCH_POST,
  ExactPostActions
} from "./actions";
import { Reducer } from "redux";
import { ExactPostModel } from "../../models";

interface exactPostState {
  readonly post: ExactPostModel | null;
  readonly isFetching: boolean;
  readonly error: any;
}

const initialState: exactPostState = {
  post: null,
  isFetching: false,
  error: null
};

export const exactPostReducer: Reducer<exactPostState, ExactPostActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_POST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case EXACT_POST_FETCH_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    case EXACT_POST_FETCHING_SUCCES: {
      return {
        ...state,
        post: action.post,
        isFetching: false,
        error: null
      };
    }
    default: {
      return state;
    }
  }
};
