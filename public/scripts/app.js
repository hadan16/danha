// js link check
$( document ).ready(function() {
    console.log("app.js linked.");

// ==========================================================================
// WELCOME ANIMATION: http://codepen.io/egrucza/pen/LkdPZP
// ==========================================================================


    setTimeout(function () {
            $('.letter').addClass('loaded');
            $('.reg-text').addClass('loaded');
        }, 1000);

// ==========================================================================
// HIDDEN NAV BAR: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
// ==========================================================================

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        // Bug fix: hamburger was appearing using fadeIn in desktop width: && $(window).width() < 414
        if (st > lastScrollTop && st > navbarHeight && $(window).width() > 414   ){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            $('.hamburger').fadeOut(80); //fixes bug where hamburger wont slide up with nav up
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()  && $(window).width() > 414) {
                $('header').removeClass('nav-up').addClass('nav-down');
                // $('.hamburger').fadeIn(550); //fixes bug where hamburger wont slide in with nav down
            }
        }
        lastScrollTop = st;
    }

// ==========================================================================
// ADD FUTURE PROJECTS HERE
// ==========================================================================


var projectData = [
  {
  "projectThumbnail" : "images/rice-and-spoon.jpg",
  "projectName" : "Rice and Spoon",
  "projectDescription" : "Responsive Website for Vietnamese Restaurant based in Newark, CA",
  "projectLink" : "http://www.riceandspoon.com/",
  },
  {
  "projectThumbnail": "images/quotes.jpg",
  "projectName" : "Quotes",
  "projectDescription" : "Collection of Favorite Quotes - MongoDB, Express, Node, Heroku App",
  "projectLink" : "https://fast-beach-18917.herokuapp.com/"
  },
  {
  "projectThumbnail" : "images/puppy-race.jpg",
  "projectName" : "Puppy Race",
  "projectDescription" : "Two player keyboard racing game built with only jQuery",
  "projectLink" : "https://hadan16.github.io/puppy-race/",
},
{
  "projectThumbnail" : "images/spotify-search.jpg",
  "projectName" : "Spotify Track Search",
  "projectDescription" : "Spotify API integration",
  "projectLink" : "https://hadan16.github.io/spotify-search-lab/",
},
{
  "projectThumbnail" : "images/gratitude-clouds.jpg",
	"projectName" : "Gratitude Clouds",
  "projectDescription" : "Gratitude entries appended to animated clouds -- currently only saved to browser memory",
	"projectLink" : "http://www.gratitudeclouds.com",
},
]
// ==========================================================================
// DYNAMICALLY FILLS div.row.gallery-container WITH TEMPLATE LITERAL
// ==========================================================================

    $("div.gallery-container").empty();

    projectData.forEach(function(index, num){
      $(".grid").append(
                    `


                    <figure class="effect-julia reveal-${num}">
                      <img src="${index.projectThumbnail}"/>
                      <figcaption>
                        <h2><span>${index.projectName}</span></h2>
                        <p>${index.projectDescription}</p>
                        <a href="${index.projectLink}">View more</a>
                      </figcaption>
                    </figure>


                    `
      );
    });

// ==========================================================================
// HAMBURGER MENU: http://www.jqueryscript.net/menu/Fullscreen-Navigation-with-Animated-Burger-Toggle-Using-jQuery-fatNav.html
// ==========================================================================
  ! function(a, b, c) {
      function d(b) {
          this.settings = a.extend({}, f, b), this._defaults = f, this._name = e, this.init()
      }
      var e = "fatNav",
          f = {};
      a.extend(d.prototype, {
          init: function() {
              var b = this,
                  c = this.$nav = a(".fat-nav"),
                  d = this.$hamburger = a('<a href="javascript:void(0)" class="hamburger"><div class="hamburger__icon"></div></a>');
              this._bodyOverflow = a("body").css("overflow"), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && c.children().css({
                  height: "110%",
                  transform: "translateY(-5%)"
              }), a("body").append(d), a().add(d).add(c.find("a")).on("click", function(a) {
                  b.toggleNav()
              })
          },
          toggleNav: function() {
              var b = this;
              this.$nav.fadeToggle(400), b.toggleBodyOverflow(), a().add(this.$hamburger).add(this.$nav).toggleClass("active")
          },
          toggleBodyOverflow: function() {
              var b = this,
                  c = a("body");
              c.toggleClass("no-scroll");
              var d = c.hasClass("no-scroll");
              c.width(c.width()), c.css("overflow", d ? "hidden" : b._bodyOverflow)
          }
      }), "undefined" == typeof a[e] && (a[e] = function(a) {
          return new d(this, a)
      })
  }(jQuery, window, document);

  $.fatNav();

// ==========================================================================
// SCROLL TO REVEAL: https://github.com/jlmakes/scrollreveal
// ==========================================================================

  // Changing the defaults
  window.sr = ScrollReveal({ reset: true });
  // Customizing a reveal set
  sr.reveal('.reveal-0', { duration: 2000 });
  sr.reveal('.reveal-1', { duration: 3000 });
  sr.reveal('.reveal-2', { duration: 4000 });
  sr.reveal('.reveal-3', { duration: 5000 });
  sr.reveal('.reveal-4', { duration: 6000 });


// ==========================================================================
// CLICK TO SCROLL FROM NAV LINKS
// ==========================================================================

  $(".dan-link").click(function() {
      $('html,body').animate({
          scrollTop: $(".dan-link-target").offset().top},
          'slow');
  });

  $(".projects-link").click(function() {
      $('html,body').animate({
          scrollTop: $(".projects-link-target").offset().top},
          'slow');
  });

  $(".photography-link").click(function() {
      $('html,body').animate({
          scrollTop: $(".photography-link-target").offset().top},
          'slow');
  });

  $(".contact-link").click(function() {
      $('html,body').animate({
          scrollTop: $(".contact-link-target").offset().top},
          'slow');
  });


}); //end document.ready check
