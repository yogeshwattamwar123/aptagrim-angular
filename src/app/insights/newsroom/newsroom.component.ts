import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.css']
})
export class NewsroomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var maxHeight = 0;
      $(".newsroom-blk .panel").each(function() {
              maxHeight = Math.max($(this).height(),maxHeight);
      });
      $(".newsroom-blk .panel").css('height', maxHeight);
  }

}
