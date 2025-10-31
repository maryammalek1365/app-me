import { ACTION_TYPE } from "./factAction"
export const initialState = {
  loading: false,
  fact: " ",
  error: false
}
export const factReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.Fetch_start:
      return { loading: true, fact: " ", error: false };

    case ACTION_TYPE.fetch_success:
      return { loading: false, fact: action.data, error: false };





    case ACTION_TYPE.fetch_error:
      return { loading: false, fact: " ", error: true };


    default:
      return state;
  }
};