import { Action } from "redux";
import { NewPostModel } from "../../models";

export const CREATE_NEW_POST = "CREATE_NEW_POST";
export const RESET_FORM_INPUTS = "RESET_FORM_INPUTS";
export const CREATING_POST_ERROR = "CREATING_POST_ERROR";

export interface CreateNewPostAction extends Action {
  type: typeof CREATE_NEW_POST;
  newPost: NewPostModel;
}
export interface ResetFormAction extends Action {
  type: typeof RESET_FORM_INPUTS;
}
export interface CreatingPostErrorAction extends Action {
  type: typeof CREATING_POST_ERROR;
  error: any;
}

export type CreatePostActions =
  | ResetFormAction
  | CreateNewPostAction
  | CreatingPostErrorAction;
