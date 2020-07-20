import { Action } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export const LOAD_TOPPINGS = '[PRODUCTS] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[PRODUCTS] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[PRODUCTS] Load Toppings Success';
export const VISUALIZE_TOPPINGS = '[PRODUCTS] Visualize Toppings';

export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsSuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]) { };
}
 
export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any) { };
}

export class VisualizeToppings implements Action {
    readonly type = VISUALIZE_TOPPINGS;
    constructor(public payload: number[]) { };
}
 
export type ToppingsAction = LoadToppings | LoadToppingsFail | LoadToppingsSuccess | VisualizeToppings;
