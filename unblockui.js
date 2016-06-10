// get the black blocking ui div
var blockedui = document.getElementById("wsopContentGatingContainer");

// check if it was found
if (blockedui !== null) {
	// remove the div
	blockedui.remove();

	// set the overflow of body to auto
	document.body.style.overflow = "auto";

	// reallow right clicking
	document.body.oncontextmenu = null;
}
