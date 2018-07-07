
// Map Modal Settings
$(document).ready(function () {
             var modal = document.getElementById('myModal');
             // Get the button that opens the modal
             var btn = document.getElementById("kevBtn");
             // Get the <span> element that closes the modal
             var span = document.getElementsByClassName("close")[0];
             // Get iframe by id and set iframe src
             var address = "https://www.mappingprejudice.org/timelapse-hennepin/index.html";
             var iframe = document.getElementById("iframe-modal");
             var blankaddress = "https://www.mappingprejudice.org/background-blank/index.html";
             var navbar = document.getElementById('map_hide');

             btn.onclick = function() {
            console.log(navbar);
             modal.style.display = "block";
             navbar.style.display = "none";
			 iframe.src = address;
             } 
            
			 
			 
			 // When the user clicks on <span> (x), close the modal
             span.onclick = function() {
             modal.style.display = "none";
			 iframe.src = blankaddress;
             navbar.style.display = "block";
             }
             // When the user clicks anywhere outside of the modal, close it
             modal.onclick = function(event) {
             if (event.target == modal) {
             modal.style.display = "none";
			 iframe.src = blankaddress;
             navbar.style.display = "block";
             }
            }
        }
    )
//Contact Modal
$(document).ready(function () {
             var contact_modal = document.getElementById('contact_modal_screened');
             var btn = document.getElementById('contact_btn');
             var close_btn = document.getElementById('contact_close');

             btn.onclick = function() {
             contact_modal.style.display = "block";
             }

             close_btn.onclick = function() {
             contact_modal.style.display = "none";
             }        
            
    });


// donate modal
$(document).ready(function () {
    var donate_link = document.getElementById('sub-title-link-donate');
        var donate_btn = document.getElementById('donate_btn');
        var donate_modal = document.getElementById('donate_modal_screened');
        var donate_span = document.getElementById('donate_modal_close');

    donate_modal.onclick = function(event) {
        if (event.target != donate_modal_div) {
            donate_modal.style.display ="none";
        }
    }

        donate_span.onclick = function() {
            donate_modal.style.display ="none";
        }
        donate_link.onclick = function () {
            donate_modal.style.display ="block";
        }

        donate_btn.onclick = function () {
            donate_modal.style.display ="block";
        }
})

//Fixed Nav Bar
    $(document).ready(function () {
        $(window).bind('scroll', function () {
        var vPos = $(window).scrollTop();
        var totalH = $('.top-section').offset().top;
        var finalSize = totalH - vPos;

        console.log('nav offset', totalH)
        console.log(finalSize);

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

    $('.stickyNavList-btn')
    .on('click', function() {
        $('.stickyNav').toggle(); 
    })
    

});



 