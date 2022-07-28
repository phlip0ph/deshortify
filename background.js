browser.webNavigation.onHistoryStateUpdated.addListener(function() {
	browser.tabs.executeScript(null, {file:"deshortify.js"})
})
