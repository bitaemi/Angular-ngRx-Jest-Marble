import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Name'},
  ];
  constructor() { }

  ngOnInit() {
  }


  log(name) {
    console.log(name);
  }

  devSubmitToInspectBehavior(f) {
    console.log(f);
  }
}
