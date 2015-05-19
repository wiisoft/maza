$(document).ready(function(){
//$('.button-collapse').sideNav({ menuWidth: 300, // Default is 240
//edge: 'right', // Choose the horizontal origin
//closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
//} );
        $(".dropdown-button").dropdown();





new WOW().init();
/*soft scroller*/

        $('a[href^="#"]').on('click',function (e) {
                        e.preventDefault();
                        var target = this.hash,
                        $target = $(target);
                        $('html, body').stop().animate({
                                'scrollTop': $target.offset().top - 100
                                }, 900, 'swing', function () {
                                window.location.hash = target;
                                });
                        });

  });
