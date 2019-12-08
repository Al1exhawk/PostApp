import { createStore, applyMiddleware, combineReducers } from 'redux';
import { postsReducer } from './posts';
import { exactPostReducer } from './exact-post';
import { newPostReducer } from './new-post';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './root-saga';
import createSagaMiddleware from 'redux-saga';

export type GenericState = {
    allPosts: ReturnType<typeof postsReducer>;
    exactPost: ReturnType<typeof exactPostReducer>;
    newPost: ReturnType<typeof newPostReducer>;
};

export const configureStore = (initialState, options?) => {
    const reducer = combineReducers<GenericState>({
        allPosts: postsReducer,
        exactPost: exactPostReducer,
        newPost: newPostReducer,
    });

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);
    return store;
};

export * from './posts';
export * from './exact-post';
