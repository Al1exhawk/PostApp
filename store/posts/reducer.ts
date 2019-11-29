import { FETCHING_SUCCES, FETCH_ERROR, FETCH_POSTS, postsActions } from ".";
import { Reducer } from "redux";
import { Post } from "../../models";

interface postsState {
  posts: ReadonlyArray<Post>;
  readonly isFetching: boolean;
  readonly error: any;
}

const initialState: postsState = {
  posts: [],
  isFetching: false,
  error: null
};

export const postsReducer: Reducer<postsState, postsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    case FETCHING_SUCCES: {
      return {
        ...state,
        posts: action.posts,
        isFetching: false,
        error: null
      };
    }
    default: {
      return state;
    }
  }
};
