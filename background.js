
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

			var els = document.querySelectorAll('#button');
			for (var a=0; a<els.length; a++) {
				if (els[a]) {
					var item = '';
					
					if (els[a].innerHTML) {
						item = els[a].innerHTML;
						item = item.toString();
					}
					
					if (item.indexOf('like') != -1 && 
						item.indexOf('Dislike') == -1 &&
						item.indexOf('aria-pressed="false"') != -1)
					{
						els[a].click();
					}
				}
			}

			intervalRunning = false;
		}
	}, 100);

})();


