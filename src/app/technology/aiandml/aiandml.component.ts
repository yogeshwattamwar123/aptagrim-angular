import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aiandml',
  templateUrl: './aiandml.component.html',
  styleUrls: ['./aiandml.component.css']
})
export class AiandmlComponent implements OnInit {
  constructor() {this.loadScripts();}

  ngOnInit() {
    $('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
      var $old_tab = $($(e.target).attr("href"));
      var $new_tab = $($(e.delegateTarget).attr("href"));
  
      if($new_tab.index() < $old_tab.index()){
        $old_tab.css('position', 'relative').css("right", "0").show();
        $old_tab.animate({"right":"-100%"}, 300, function () {
          $old_tab.css("right", 0).removeAttr("style");
        });
      }
      else {
        $old_tab.css('position', 'relative').css("left", "0").show();
        $old_tab.animate({"left":"-100%"}, 300, function () {
          $old_tab.css("left", 0).removeAttr("style");
        });
      }
    });
  
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
      var $new_tab = $($(e.target).attr("href"));
      var $old_tab = $($(e.delegateTarget).attr("href"));
  
      if($new_tab.index() > $old_tab.index()){
        $new_tab.css('position', 'relative').css("right", "-2500px");
        $new_tab.animate({"right":"0"}, 500);
      }
      else {
        $new_tab.css('position', 'relative').css("left", "-2500px");
        $new_tab.animate({"left":"0"}, 500);
      }
    });
  
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      // your code on active tab shown
    });

    if( screen.width >= 1025){	
      setTimeout(function(){
        $(".amazingcarousel-container-4_heg").css('height', $("#amazingcarousel-container-4").height()+18); }, 500
      );
    }
  }

  loadScripts() {
    console.log('Loading visjs js/css files...');
    const dynamicScripts = [
     '../../../../node_modules/carouselengine/amazingcarousel.js',
     '../../../../node_modules/carouselengine/initcarousel-1.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
