import { Action } from "@ngrx/store";

export enum CustomerActionTypes {
  Add = "[Customer Component] Add",
  Remove = "[Customer Component] Remove"
}

export interface CustomerAction extends Action {
  readonly type;
  payload: any;
}

export class CustomerAdd implements CustomerAction {
  type = CustomerActionTypes.Add;
  constructor(public payload: any) {}
}

export class CustomerRemove implements CustomerAction {
  type = CustomerActionTypes.Remove;
  constructor(public payload: number) {}
}
