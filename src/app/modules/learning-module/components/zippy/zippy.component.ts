import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {

  isSelected: boolean;
  @Input() title: string;
  @Input() innerComponent: string;
  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.isSelected = !this.isSelected;
  }
}
