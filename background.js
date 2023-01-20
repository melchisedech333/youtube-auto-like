
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

			var els = document.querySelectorAll('#segmented-like-button button');
			
            if (els)
			if (els[0])
            
            for (var a=0; a<els.length; a++) {
				if (els[a]) {
                    var item = '';
					
					if (els[a].innerHTML) {
						item = els[a].innerHTML;
						item = item.toString().toLowerCase();
					}

					if (els[a].getAttribute('aria-pressed') == 'false') {
						els[a].click();
						console.log("Liked!");
					}

					break;
				}
			}

			intervalRunning = false;
		}
	}, 100);

})();


