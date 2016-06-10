// function to clear the black ui
var clearBlockedUIFunction = function() {
	// get the black blocking ui div
	var blockedui = document.getElementById("wsopContentGatingContainer");

	// check if it was found
	if (blockedui !== null) {
		// remove the div
		blockedui.remove();

		// set the overflow of body to auto
		document.body.style.overflow = "auto";

		// reallow right clicking
		document.body.oncontextmenu = "";

		// return true on success
		return true;
	}
	// return false if not found
	return false;
}

// run the function once and store the result
var isUIBlocked = clearBlockedUIFunction();

// if the ui wasnt blocked, setup an interval to check every second for it
if (isUIBlocked === false) {
	var blockedUiInterval = setInterval(function(){
		// run the block
		isUIBlocked = clearBlockedUIFunction();
		// if the block was successful remove the interval
		if (isUIBlocked === true) {
			// clear the interval
			window.clearInterval(blockedUiInterval);
		}
	}, 1000);
}
