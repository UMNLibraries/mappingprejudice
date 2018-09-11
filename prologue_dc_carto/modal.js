//Contact Modal
$(document).ready(function () {
             var contact_modal = document.getElementById('contact_modal_screened');
             var btn = document.getElementById('logo-img');
             var close_btn = document.getElementById('contact_close');

             btn.onclick = function() {
             contact_modal.style.display = "block";
             }

             close_btn.onclick = function() {
             contact_modal.style.display = "none";
             }
             // When the user clicks anywhere outside of the modal, close it
             contact_modal.onclick = function(event) {
             if (event.target == contact_modal) {
             contact_modal.style.display = "none";
              }
            }        
            
    });