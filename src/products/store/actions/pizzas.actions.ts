import { Pizza } from './../../models/pizza.model';
import { Action } from '@ngrx/store';

//load pizzas
export const LOAD_PIZZAS = '[PRODUCTS] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[PRODUCTS] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[PRODUCTS] Load Pizzas Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
    constructor(public payload: any) {}
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {}
}

export type PizzasActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;