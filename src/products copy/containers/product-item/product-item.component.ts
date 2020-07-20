import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Topping } from '../../models/topping.model';
import { Pizza } from '../../models/pizza.model';
import * as fromStore from '../../store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
      tap((pizza: Pizza = null) => {
        const pizzaExists = !!(pizza && pizza.toppings); //cast to a boolean
        // if we navigate to '/new' we have to clear the store
        const toppings = pizzaExists
          ? pizza.toppings.map(topping => topping.id)
          : [];
        // if we navigate to '/new' we have to clear the store dispatching the empty array of the toppings
        this.store.dispatch(new fromStore.VisualizeToppings(toppings));
      })
    );
    this.toppings$ = this.store.select(fromStore.getAllToppings);
    this.visualise$ = this.store.select(fromStore.getPizzaVisualized);
  }

  onSelect(event: number[]) {
    this.store.dispatch(new fromStore.VisualizeToppings(event));
    console.log('onSelect event :::', event);
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new fromStore.CreatePizza(event));
    console.log('oncreate event :::', event);

  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new fromStore.UpdatePizza(event));
  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {  
      this.store.dispatch(new fromStore.RemovePizza(event));

    }
  }
}
