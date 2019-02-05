import { Pizza } from 'src/products/models/pizza.model';
import * as Pizzas from '../actions/pizzas.action'

export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    data: [
        {
            "name": "Blazin' Inferno",
            "toppings": [
              {
                "id": 10,
                "name": "pepperoni"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 4,
                "name": "chili"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 2,
                "name": "bacon"
              }
            ],
            "id": 1
          }
    ],
    loaded: false,
    loading: false
}

export function reducer(
    state = initialState,
    action: Pizzas.PizzasActions
): PizzaState {
    switch (action.type) {
        case Pizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true
            }
        }
        case Pizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded:false
            }
        }
        case Pizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            }
        }
    }
    return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
