
$(document).ready(function() {

    var html = '';
    for (var i = 1; i <= 20; i ++) {
        html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
    }
      
    document.querySelector('.shape').innerHTML += html;
    
    var $allShapes = $("[class*='shape-container--']");
    $('.button').click(function (event) {
        $allShapes.toggleClass("stop-shape");
        var $this = $(this);
        $this.toggleClass('.button');
        if($this.hasClass('.button')){
            $this.text('Unfreeze shapes');         
        } else {
            $this.text('Freeze shapes');
        }
        event.preventDefault();
    });

    // $(".navbar-nav li a").click(function(event) {
    //     $(".navbar-collapse").collapse('hide');
    //   });

    //   if( $(e.target).is('a:not(".dropdown-toggle")') ) {
    //     $(this).collapse('hide');
    // }
    
    });

    

    

  //   $('a[href*="#"]')
  // // Remove links that don't actually link to anything
  // .not('[href="#"]')
  // .not('[href="#0"]')
  // .click(function(event) {
  //   // On-page links
  //   if (
  //     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
  //     && 
  //     location.hostname == this.hostname
  //   ) {
  //     // Figure out element to scroll to
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     // Does a scroll target exist?
  //     if (target.length) {
  //       // Only prevent default if animation is actually gonna happen
  //       event.preventDefault();
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000, function() {
  //         // Callback after animation
  //         // Must change focus!
  //         var $target = $(target);
  //         $target.focus();
  //         if ($target.is(":focus")) { // Checking if the target was focused
  //           return false;
  //         } else {
  //           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
  //           $target.focus(); // Set focus again
  //         };
  //       });
  //     }
  //   }
  // });

    //  Counter Js 

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });


    // Add smooth scrolling to Menu links

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      

//  });



 
