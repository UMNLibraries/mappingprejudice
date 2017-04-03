
// Map Modal Settings
$(document).ready(function () {
             var modal = document.getElementById('myModal');
             // Get the button that opens the modal
             var btn = document.getElementById("kevBtn");
             // Get the <span> element that closes the modal
             var span = document.getElementsByClassName("close")[0];
             // Get iframe by id and set iframe src
             var address = "http://historyapolis.com/KevinsProjects/Covenants-1983674857393026152499/iframe-timelapse/index.html";
             var iframe = document.getElementById("iframe-modal");
             var blankaddress = "http://historyapolis.com/KevinsProjects/background-blank/index.html";

             btn.onclick = function() {
             modal.style.display = "block";
			 iframe.src = address;
             } 
            
			 
			 
			 // When the user clicks on <span> (x), close the modal
             span.onclick = function() {
             modal.style.display = "none";
			 iframe.src = blankaddress;
             }
             // When the user clicks anywhere outside of the modal, close it
             window.onclick = function(event) {
             if (event.target == modal) {
             modal.style.display = "none";
			 iframe.src = blankaddress;
             }
            } 
        }
    )
//Contact Modal
$(document).ready(function () {
    var contact_modal = document.getElementById('contact_modal_screened');
    var contact_btn = document.getElementById('contact_btn');
    var contact_span = document.getElementById('contact_close');
    var contact_link = document.getElementById('sub-title-link-contact');
    var events_link = document.getElementById('sub-title-link-events');
    var footer_contact_btn = document.getElementById('footer-contact-btn');
    var contact_text = document.getElementById('contact-text-btn');
    var events_modal = document.getElementById('events_modal_screened');
    var events_span = document.getElementById('events_close');

    contact_link.onclick = function () {
        contact_modal.style.display = "block";
    }

    contact_btn.onclick = function () {
        contact_modal.style.display = "block";
    }

    footer_contact_btn.onclick = function () {
        contact_modal.style.display = "block";
    }
    events_link.onclick = function () {
        events_modal.style.display ="block";
    }
    contact_text.onclick = function () {
        contact_modal.style.display ="block";
    }
    contact_span.onclick = function() {
        contact_modal.style.display = "none";
    }

    events_span.onclick = function() {
        events_modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == contact_modal) {
            contact_modal.style.display = "none";
        } else if (event.target == events_modal) {
            events_modal.style.display ="none";
        }
    }
    
})
//Get Involved Modal
//Fixed Nav Bar
    $(document).ready(function () {
        $(window).bind('scroll', function () {
        var vPos = $(window).scrollTop();
        var totalH = $('#sub-header-content').offset().top;
        var finalSize = totalH - vPos;

        console.log('nav offset', totalH)
        // console.log(finalSize);

        if (finalSize <= 0) {
            $('#stickyNav').css({
                'position': 'fixed',
                    'top': 0
            });
            
            $('.stickyNav-title').attr('id', 'show-title');
            $('.stickyNav-img').attr('id', 'show-img');
            $('.stickyNav-menu-center').attr('id', 'hide-menu');
        } else {
            
             $('#stickyNav').css({
                'position': 'relative'
            });
            $('.stickyNav-title').removeAttr('id');
            $('.stickyNav-img').removeAttr('id');
            $('.stickyNav-menu-center').removeAttr('id');
        }
    });
});

//Fire mobile Nav Bar
$(document).ready(function() {
    $('.stickyNavList-btn')
    .on('click', function(){
         $('.stickyNavList').toggle();
    })
})


