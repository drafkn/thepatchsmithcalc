// JavaScript Document
function addEmail() {
	var domain = "qualitylapelpins.com";
	document.getElementById('infoaddr').innerHTML = '<a class="linkstyle contact" href="mailto:' + 'info' + '@' + domain + '?subject=Quality%20Embroidered%20Patches%20inquiry">' + 'info' + '@' + domain + '</a>';
	addEmIcon();  //because addEmail() is only used on the contact pages, so this will call both functions.
}

function addEmIcon() {
	var domain = "qualitylapelpins.com";
	document.getElementById('emblock').innerHTML = '<a class="w-inline-block social-button" href="mailto:' + 'info' + '@' + domain + '?subject=Quality%20Embroidered%20Patches%20inquiry"><img src="images/email-icon.png" alt="Contact Us" width="21px"></a>'
}

function addEmIcon1l() {
	var domain = "qualitylapelpins.com";
	document.getElementById('emblock').innerHTML = '<a class="w-inline-block social-button" href="mailto:' + 'info' + '@' + domain + '?subject=Quality%20Embroidered%20Patches%20inquiry"><img src="../images/email-icon.png" alt="Contact Us" width="21px"></a>'
}

function addEmIcon2l() {
	var domain = "qualitylapelpins.com";
	document.getElementById('emblock').innerHTML = '<a class="w-inline-block social-button" href="mailto:' + 'info' + '@' + domain + '?subject=Quality%20Embroidered%20Patches%20inquiry"><img src="../../images/email-icon.png" alt="Contact Us" width="21px"></a>'
}