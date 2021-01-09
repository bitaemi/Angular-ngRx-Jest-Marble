import { Component, Inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-questions-index',
  templateUrl: './questions-index.component.html',
  styleUrls: ['./questions-index.component.css']
})
export class QuestionsIndexComponent
{
  n: number = 0;
  // if you do not need your data update in the view constantly, for operastions that happen inside a component
  // then, you would use ngZone - here you will get updated data of compont only when click event triggers method1 of component
  constructor(@Inject(NgZone) private zone: NgZone)
  {
    this.zone.runOutsideAngular( () => {
      setInterval( () => {
        this.n = this.n + 1;
        console.log(this.n);
      }, 300);
    } );
  }

  method1()
  {
  }
}

