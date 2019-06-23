import { Component, OnInit } from '@angular/core';

import { JobsdataService } from '../../jobsdata.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private data:JobsdataService) { }
  public jobs = [];
  ngOnInit() {

    this.data.getjobs().subscribe(data => this.jobs = data);




    $( document ).ready(function() {          
      (<any>$).mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
        (<any>$).mCustomScrollbar.defaults.axis="y"; //enable 2 axis scrollbars by default
    });

    if($(".id_class_for_heg").height() > 340){
      $(".id_class_for_heg").css({"height": "345"});
      $(".id_class_for_heg").mCustomScrollbar({theme:"minimal-dark"});
    }

    var maxHeight_carrer = 0;
    $(".carrer_text p").each(function() {
      maxHeight_carrer = Math.max($(this).height(),maxHeight_carrer);
    });
    $(".carrer_text p").css('height', maxHeight_carrer+25);
  }

}
