jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            jsfolder:jsFolder
        });
    }
    jQuery("#amazingcarousel-4").amazingcarousel({
        jsfolder:jsFolder,
        width:0,
        height:180,
        interval:3000,
        itembottomshadowimagetop:100,
        random:false,
        direction:"horizontal",
        arrowheight:48,
        itembackgroundimagewidth:100,
        skin:"Notebook",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        navstyle:"bullet",
        enabletouchswipe:true,
        backgroundimagetop:0,
        arrowstyle:"none",
        bottomshadowimagetop:95,
        transitionduration:1000,
        hoveroverlayimage:"hoveroverlay-64-64-3.png",
        itembottomshadowimage:"itembottomshadow-100-100-5.png",
        showitembottomshadow:false,
        transitioneasing:"easeOutExpo",
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"",
        showbottomshadow:false,
        screenquery:{
            tablet: {
                screenwidth: 900,
                visibleitems: 1
            },
        	mobile: {
        		screenwidth: 600,
        		visibleitems: 1
        	}
        },
        navimage:"bullet-16-16-0.png",
        itembackgroundimagetop:0,
        showbackgroundimage:true,
        showplayvideo:true,
        spacing:4,
        scrollitems:1,
        showhoveroverlay:true,
        scrollmode:"page",
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"tech-laptop.png",
        arrowwidth:48,
        pauseonmouseover:true,
        navmode:"page",
        arrowhideonmouseleave:500,
        navwidth:16,
        navspacing:8,
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:1,
        navswitchonmouseover:false,
        bottomshadowimagewidth:110,
        autoplay:true,
        backgroundimagewidth:100,
        loop:0,
        navheight:16
    });
});