/*** BX SLIDER Option for Latest Post ***/
jQuery().ready(function () {"use strict";
             jQuery('.bxslider').bxSlider({
                 mode: 'horizontal',
                 slideMargin: 30,
                 auto:false,
                 pager:false,
                 controls:true,
                 nextSelector: '#slider-next',
                 prevSelector: '#slider-prev',
                 nextText: '<img src="' + image.template_directory_uri + '/img/next.png"/>',
                 prevText: '<img src="' + image.template_directory_uri + '/img/prev.png"/>'
             });
         });



jQuery(window).load(function() {"use strict";
  jQuery('.flexslider').flexslider({
    animation: "slide",
    smoothHeight: true,
    touch: true
  });
});

jQuery(window).load(function() {"use strict";
  jQuery('.clientslider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 173,
    itemMargin: 27,
    minItems: 2,
    maxItems: 6
  });
});

/*** Comment Buton Effect ***/
jQuery(document).ready(function($) {"use strict";
    $('input#submit').addClass('buton b_pink buton-1');
});

/*** NAVIGATION FOR RESPONSIVE ***/

jQuery(function() {"use strict";

jQuery('.nav-responsive').on('change', function() {
            window.location = jQuery(this).val();
        });
});



/*** Header Navigation Active Class ***/
jQuery(function(jQuery) {"use strict";
jQuery("#header .navbar .container li a").filter(function(){
    return this.href === location.href.replace(/#.*/, "");
})
.closest('li.dropdown').addClass("current-page");
});

/*** Header If (ul li ul li) has sub menu add class ***/
jQuery(function() {"use strict";
    var menu=jQuery('#header .navbar');
    menu.find('ul li ul li:has(ul)').addClass('dropdown-submenu');
});


/*** Navigation Footer ***/
jQuery(function(jQuery) {"use strict";
    var footer=jQuery(".menu-footer-container");
    footer.find('ul').removeClass('menu').addClass('footer-menu');
});

/*** BLOG MASONRY ***/
jQuery(function(jQuery) {"use strict";
    var container=jQuery('.blog-masonry');
    container.imagesLoaded( function(){
        container.masonry({
        isAnimated: true,
        itemSelector:'.blog-item',
        columnWidth: 279
});
});
    container.masonry();
});

jQuery(document).ready(function() {"use strict";
   var myclasses;
   var myclass;
   var ekclass;
jQuery('.clientslider, .latestpost, .wpb_toggle, .wpb_toggle_content, .teaser_grid_container li .blind, .isotope-item, .wpb_alert, .table, .blog-item, .testimonial, .four-column, .latestpost, .wpb_text_column, .box, .wpb_tour_tabs_wrapper, .wpb_teaser_grid, .wpb_accordion, .portfolio-item, .portfolio-item-two, .portfolio-item-one, .three-column, .wpb_single_image, .m_title').waypoint(function() {
   myclasses = this.className;
   myclass = myclasses.split(" ");
   ekclass = myclass[0].split("-");
    if ( ekclass[0] !== "no_animation" && myclass[1] === "blind") {
                jQuery(this).addClass('v '+ekclass[0]);
                                                   }
}, { offset: '50%' });

});
/*** Post Meta Animate ***/
jQuery(document).ready(function() {"use strict";
    var myclasses2;
    var myclass2;
    var ekclass2;
 //Effect hover lateral metas
    jQuery('.post-date, .bypostauthor, .post-tags, .post-title').hover(function () {
        myclasses2 = this.className;
        myclass2 = myclasses2.split(" ");
        ekclass2 = myclass2[0].split("-");
        jQuery(this).addClass(ekclass2[0]);
    });

});
/*** Pretty Photo ***/
jQuery(document).ready(function(){"use strict";
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto();
  });
/*** Remove inline style wp-caption***/
jQuery(".wp-caption").removeAttr('style');