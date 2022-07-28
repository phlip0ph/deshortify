	var currentShort = window.location.href
	if(currentShort.match(/shorts/g)){
		var deshorted = currentShort.replace("/shorts/", "/watch?v=")
		window.location.replace(deshorted)
	}

