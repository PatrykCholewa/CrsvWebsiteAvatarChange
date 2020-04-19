// ==UserScript==
// @name         Craftserve Website Avatar Change 
// @namespace    https://greasyfork.org/pl/users/416294-patrykcholewa
// @version      1.0.0
// @description  Changes Steve emoji of user avatars to premium nick ones
// @author       PatrykCholewa
// @include      https://s*.csrv.pl/*
// @grant        none
// ==/UserScript==

(function() {
	function changeAvatars() {

		var ul = document.querySelector(".lista-top+ul");
		var imgs = ul.querySelectorAll(".gracz > img");
		for (var img of imgs) {
			var currentUrl = img.getAttribute("src");
			var urlParts = currentUrl.split("/");
			var nick = urlParts[urlParts.length - 2];
			if (nick.match(/^[0-9a-zA-Z_-]+$/)) {
				var newUrl = "https://minotar.net/helm/" + nick;
				img.setAttribute("src", newUrl);
			}
		}

	}
	
	
	var observer = new MutationObserver(changeAvatars); 
	observer.observe(document.querySelector('.lista-top+ul'), {childList: true});
	
})()
