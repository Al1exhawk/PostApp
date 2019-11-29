import { createStore, applyMiddleware, combineReducers } from "redux";
import { postsReducer } from "./posts";
import { exactPostReducer } from "./exactPost";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export type GenericState = {
  allPosts: ReturnType<typeof postsReducer>;
  exactPost: ReturnType<typeof exactPostReducer>;
};

const reducer = combineReducers<GenericState>({
  allPosts: postsReducer,
  exactPost: exactPostReducer
});

export const makeStore = (initialState, options) => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export * from "./posts";
export * from "./exactPost";
