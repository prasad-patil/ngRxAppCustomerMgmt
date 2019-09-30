import {
  CustomerAction,
  CustomerActionTypes
} from "../Actions/customer.actions";

export const initialState = [];

export function customerReducer(state = initialState, action: CustomerAction) {
  switch (action.type) {
    case CustomerActionTypes.Add:
      return [...state, action.payload];
    case CustomerActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
