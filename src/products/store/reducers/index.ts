import * as pizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState {
    pizzas: pizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: pizzas.reducer
}

export const getProductsState = createFeatureSelector<ProductState>('products');

const state = {
    products: {
        pizzas: {
            data: [],
            loaded: false,
            loading: false
        }
    }
}

export const getPizzaState = createSelector(
    getProductsState,
    (state: ProductState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, pizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, pizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, pizzas.getPizzasLoading);
