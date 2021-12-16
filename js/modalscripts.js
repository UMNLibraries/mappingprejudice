// Map Modal Settings
$(document).ready(function () {
  let fullscreen = false

  function toggle() {
    $('#map_hide').toggleClass('hide');
    $('#fullscreen-background').toggleClass('fullscreen');
    $('#fullscreen-background')[0].scrollIntoView({behavior: 'instant', block: "start", inline: "nearest"})
    $('#map').toggleClass('fullscreen');
    $('#fullscreen').toggleClass('fullscreen');
    $('body').toggleClass('o-hidden');

    if (fullscreen) {
      $('#map-section')[0].scrollIntoView({behavior: 'instant', block: "start", inline: "nearest"})
      let headerHeight = $('#show-nav').height()
      window.scrollBy(0, -headerHeight)
      $('.close').hide(0);
    } else {
      $('.close').fadeIn(750);
    }

    fullscreen = !fullscreen
  }

  $('#fullscreen').on('click', toggle);
  $('#fullscreen-background').on('click', function(e) {
    if (e.target == this && fullscreen) {
      toggle()
    }
  });
  $('#map').on('transitionend', function() {
    invalidateMapSize();
  })
  $('.close').on('click', toggle);
})


//Contact Modal
$(document).ready(function () {
  var contact_modal = document.getElementById('contact_modal_screened');
  var btn = document.getElementById('contact_btn');
  var close_btn = document.getElementById('contact_close');

  if (btn) {
    btn.onclick = function() {
      contact_modal.style.display = "block";
    }

    close_btn.onclick = function() {
      contact_modal.style.display = "none";
    }
  }


});

//Fixed Nav Bar
$(document).ready(function () {
  $(window).bind('scroll', function () {
    var vPos = $(window).scrollTop();
    var totalH = $('.top-section').offset().top;
    var finalSize = totalH - vPos;

    //console.log('nav offset', totalH)
    //console.log(finalSize);

    if (finalSize <= -10) {
      $('#stickyNav').css({
        'position': 'fixed',
        'top': 50
      });

      $('.stickyNav-title').attr('id', 'show-title');
      $('.stickyNav-img').attr('id', 'show-img');
      $('.stickyNav-menu-center').attr('id', 'hide-menu');
      $('.top-sticky-nav-desktop').attr('id', 'show-nav');
      $('.side-nav-bar').removeAttr('id');


    } else {

      $('#stickyNav').css({
        'position': 'relative'
      });
      $('.stickyNav-title').removeAttr('id');
      $('.stickyNav-img').removeAttr('id');
      $('.stickyNav-menu-center').removeAttr('id');
      $('.top-sticky-nav-desktop').removeAttr('id');
      $('.side-nav-bar').attr('id', 'hide-menu');

    }
  });
});

//Fire mobile Nav Bar
$(document).ready(function() {
  $('.stickyNavList-btn').on('click', function() {
    $('.stickyNav').toggle();
  });
});


//Map Launch Buttons
$(document).ready(function() {
  var timelapse_map = document.getElementById('map');
  var interactive_map = document.getElementById('interactive_map_iframe');
  $('#timelapse_button').on('click', function() {
    map.style.display = "block";
    interactive_map.style.display = "none";
    interactive_button.style.backgroundColor = "#afafaf";
    interactive_button.style.color = "#484848"
    timelapse_button.style.backgroundColor = "#656565";
    timelapse_button.style.color = "#ececec";
    timelapse_sub_script.style.display = "block";
    explore_sub_script.style.display = "none"

  });
});


$(document).ready(function() {
  var timelapse_map = document.getElementById('map');
  var interactive_map = document.getElementById('interactive_map_iframe');
  $('#interactive_button').on('click', function() {
    map.style.display = "none";
    interactive_map.style.display = "block";
    interactive_button.style.backgroundColor = "#656565";
    interactive_button.style.color = "#ececec"
    timelapse_button.style.backgroundColor = "#afafaf";
    timelapse_button.style.color = "#484848";
    timelapse_sub_script.style.display = "none";
    explore_sub_script.style.display = "block"
  });
});
