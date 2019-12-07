import { FETCHING_SUCCES, FETCH_ERROR, FETCH_POSTS, PostsActions } from ".";
import { Reducer } from "redux";
import { PostModel } from "../../models";

interface PostsState {
  posts: ReadonlyArray<PostModel>;
  readonly isFetching: boolean;
  readonly error: any;
}

const initialState: PostsState = {
  posts: [],
  isFetching: false,
  error: null
};

export const postsReducer: Reducer<PostsState, PostsActions> = (
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
