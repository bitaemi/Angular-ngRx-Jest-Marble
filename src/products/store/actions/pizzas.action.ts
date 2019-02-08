import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// create pizzas

export const CREATE_PIZZAS = '[Products] Create Pizzas';
export const CREATE_PIZZAS_FAIL = '[Products] Create Pizzas Fail';
export const CREATE_PIZZAS_SUCCESS = '[Products] Create Pizzas Success';

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZAS_SUCCESS;
  constructor(public payload: any) {}
}

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZAS;
  constructor(public payload: Pizza[]) {}
}
// action types
export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaSuccess
  | CreatePizzaFail;