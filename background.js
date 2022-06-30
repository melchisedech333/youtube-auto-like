
(function() {

	var url = window.location.href.toString().trim();
    if (url.indexOf('youtube.com') == -1) {
        return;
    }

	console.log("YouTube Auto Like Started - Cristo <3");

	var intervalRunning = false;
	var interval = setInterval(function() {

		if (intervalRunning == false) {
			intervalRunning = true;

			var els = document.querySelectorAll('.style-scope yt-icon-button');

			if (els.length > 0) {
				console.log("Found!");

				for (var a=0; a<els.length; a++) {
					if (els[a]) {
						if (els[a].__data) {
							if (els[a].__data.label) {
								if (els[a].__data.label.toString().trim().indexOf('like') != -1) {
									els[a].click();

									clearInterval(interval);
									intervalRunning = false;

									console.log('Liked!');
									break;
								}
							}
						}
					}
				}
			}

			intervalRunning = false;
		}
	}, 100);

})();


