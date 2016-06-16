// execute only if on wsop.com
if (window.location.href.indexOf("wsop.com") !== -1) {
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
			document.body.oncontextmenu = null;

			// return true on success
			return true;
		}
		// return false if not found
		return false;
	}

	// run the function once and store the result
	var isUIBlocked = clearBlockedUIFunction();

	// if the ui wasnt blocked, setup an interval to check for it
	if (isUIBlocked === false) {
		// setup a counter to stop the script, just in case
		var counter = 0;
		// setup up the interval
		var blockedUiInterval = setInterval(function(){
			// increment the counter
			counter++;
			// run the block
			isUIBlocked = clearBlockedUIFunction();
			// if the block was successful remove the interval
			if (isUIBlocked === true || counter > 1000) {
				// clear the interval
				window.clearInterval(blockedUiInterval);
			}
		}, 100);
	}
}
