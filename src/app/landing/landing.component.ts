import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor( ) { }

  ngOnInit() {
    (<any>$("#about-us")).flexisel({
      visibleItems:3,
      itemsToScroll: 1,         
      autoPlay: {
          enable: true,
          interval: 5000,
          pauseOnHover: true
      }        
   });
   
   
   (<any>$("#technology-focus")).flexisel({
      visibleItems:5,
      itemsToScroll: 1,         
      autoPlay: {
          enable: true,
          interval: 7000,
          pauseOnHover: true
      }        
   });
   
  $("#cd-timeline").css("height",$(".history-overview").height()-130);
  (<any>$( document )).ready(function() {          
    (<any>$).mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
      (<any>$).mCustomScrollbar.defaults.axis="y"; //enable 2 axis scrollbars by default
    $("#cd-timeline").mCustomScrollbar({theme:"light-thick"});
  });

  
  var allPanels = $('.accordion-section > .accordion-section-content, .toc-tab-box .acc-content, .toc-content.privacy-policy .acc-content').hide();
  (<any>$('.accordion-section  .accordion-section-title, .toc-tab-box .acc-title, .toc-content.privacy-policy h2.acc-title, .acc-content .quest .accordionItemHeading h4')).off().on('click', function (event) {
      if (!$(this).hasClass('open')) {
          allPanels.slideUp();
          $(this).addClass('open');
          $(this).next().slideDown();
      } else {
          allPanels.slideUp();
          $(this).removeClass('open');
      }
  });
  var insdeDivs = $('.acc-content .quest .answer').hide();
  (<any>$('.acc-content .quest .accordionItemHeading h4')).off().on('click', function (event) {
      if (!$(this).hasClass('open')) {
          insdeDivs.slideUp();
          $(this).addClass('open');
          $(this).parent().parent().parent().parent().parent().parent().find('.answer').slideDown();
      } else {
          insdeDivs.slideUp();
          $(this).removeClass('open');
      }
  });



$("#carousel-first .carousel-inner .item > img").css("height",$(window).height());






if( screen.width >= 992){
   $(".acc-content_heg").css('height', $(".acc-content").height());
}

  (<any>$('.carousel')).carousel();
  }

}
