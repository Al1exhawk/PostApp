import {
  CreatePostActions,
  RESET_FORM_INPUTS,
  CREATING_POST_ERROR,
  CREATE_NEW_POST
} from "./actions";
import { Reducer } from "redux";
import { NewPostModel } from "../../models";

interface NewPostState {
  newPost: NewPostModel;
  error: any;
  isSending: boolean;
}

const initialState: NewPostState = {
  newPost: {
    title: "",
    body: ""
  },
  error: null,
  isSending: false
};

export const newPostReducer: Reducer<NewPostState, CreatePostActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE_NEW_POST: {
      return { ...state, isSending: true };
    }
    case RESET_FORM_INPUTS: {
      return { ...initialState };
    }
    case CREATING_POST_ERROR: {
      return { ...state, isSending: false, error: action.error };
    }
    default: {
      return state;
    }
  }
};
