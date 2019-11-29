import {
  EXACT_POST_FETCHING_SUCCES,
  EXACT_POST_FETCH_ERROR,
  FETCH_POST,
  exactPostActions
} from ".";
import { Reducer } from "redux";
import { exactPost } from "../../models";

interface exactPostState {
  readonly post: exactPost | null;
  readonly isFetching: boolean;
  readonly error: any;
}

const initialState: exactPostState = {
  post: null,
  isFetching: false,
  error: null
};

export const exactPostReducer: Reducer<exactPostState, exactPostActions> = (
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
