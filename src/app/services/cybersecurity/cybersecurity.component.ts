import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cybersecurity',
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<any>$("#mlsupport-slider")).owlCarousel({
      items:1,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[980,1],
      itemsTablet:[768,1],
      itemsMobile:[650,1],
      pagination:true,
      navigation:false,
      slideSpeed:1000,
      autoPlay:true
  });
  }

}
