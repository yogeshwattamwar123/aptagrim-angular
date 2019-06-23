import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mldevelopment',
  templateUrl: './mldevelopment.component.html',
  styleUrls: ['./mldevelopment.component.css']
})
export class MldevelopmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<any>$("#technology-focus")).flexisel({
      visibleItems:5,
      itemsToScroll: 1,         
      autoPlay: {
        enable: true,
        interval: 5000,
        pauseOnHover: true
      }        
    });
  }

}
