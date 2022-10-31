
(function() {

	var url = window.location.href.toString().trim();
    if (url.indexOf('youtube.com') == -1) {
        return;
    }

	console.log("YouTube Auto Like Started - I Love Cristo <3");

	var intervalRunning = false;
	var interval = setInterval(function() {

		if (intervalRunning == false) {
			intervalRunning = true;

			var els = document.querySelectorAll('yt-animated-icon');
			for (var a=0; a<els.length; a++) {
				if (els[a]) {
					els[a].click();
					clearInterval(interval);
					break;
				}
			}

			intervalRunning = false;
		}
	}, 100);

})();


