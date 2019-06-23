import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptabi',
  templateUrl: './aptabi.component.html',
  styleUrls: ['./aptabi.component.css']
})
export class AptabiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<any>$('.carousel')).carousel();
  }

}
