<script>

/* ========================================================================================== */

// js
var n = new Date();
var d = n.getDay();

if(d==0) document.getElementById('sun').style.color='#00a7e1';
if(d==1) document.getElementById('mon').style.color='#00a7e1';
if(d==2) document.getElementById('tue').style.color='#00a7e1';
if(d==3) document.getElementById('wed').style.color='#00a7e1';
if(d==4) document.getElementById('thu').style.color='#00a7e1';
if(d==5) document.getElementById('fri').style.color='#00a7e1';
if(d==6) document.getElementById('sat').style.color='#00a7e1';


/* ========================================================================================== */

/* ******************** RD ***
Modal - Appointment Request
*********************** RD ***/

	document.querySelector(".open-modal").addEventListener("click", openModal);
	document.querySelector(".open-modal-2").addEventListener("click", openModal);
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];

	function openModal() {
		if(modal) {
			console.log("Modal Exists");
		}
		console.log("Open Modal");
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

// Phone Number
jQuery('.t-entry-cf-detail-110456').each(function() {
    // jQuery('.t-entry-cf-detail-110456').attr("phone", "");
    var phone = jQuery(this).text();
    var phoneURL = phone.replace(/[" "()-]/g, "");
    jQuery(this).text(phone.replace(phone, ''));
    // jQuery(this).append( "<span class='rd-detail-value'><i class='fa fa-phone fa-fw fa-flip-horizontal' aria-hidden='true'></i></i><a href=tel:+1"+phoneURL+"> "+phone+"</a></span>" );
    var html =
    '<span class="rd-detail-container">'+
      '<span class="rd-detail-label">'+
        '<i class="fa fa-phone fa-fw fa-flip-horizontal" aria-hidden="true"></i>'+
      '</span>'+
      '<span class="rd-detail-value">'+
        '<a href=tel:+1'+phoneURL+' target="_blank">'+phone+'</a>'+
      '</span>'+
    '</span>';
    jQuery(this).append(html);
});
// Email
jQuery('.t-entry-cf-detail-142935').each(function() {
    // jQuery('.t-entry-cf-detail-142935').attr("email", "");
    var email = jQuery(this).text();
    jQuery(this).text(email.replace(email, ''));
    var html =
    '<span class="rd-detail-container">'+
      '<span class="rd-detail-label">'+
        '<i class="fa fa-envelope fa-fw" aria-hidden="true"></i>'+
      '</span>'+
      '<span class="rd-detail-value">'+
        '<a href=mailto:'+email+' target="_blank">'+email+'</a>'+
      '</span>'+
    '</span>';
    jQuery(this).append(html);
});
	</script>
