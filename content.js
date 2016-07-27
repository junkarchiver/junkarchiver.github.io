function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
	    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
	function( m, key, value ) { // callback
	    vars[key] = value !== undefined ? value : '';
	}
    );

    if ( param ) {
	return vars[param] ? vars[param] : null;
    }
    return vars;
}


var media = {
    "ex": '<h1><b>Running Into Your Ex</h1><p/><iframe src="https://vine.co/v/ibmWKK6YZFY/embed/postcard?audio=1" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>'
};

var teasers = [
    '<a href="?media=ex">Running Into Your Ex</a>'
];

function loadContent() {

    var contentDiv = document.getElementById("content");

    var mediaKey = $_GET("media");

    if (mediaKey != null && mediaKey != undefined) {
	var mediaHtml = media[mediaKey];
	if (mediaHtml != null && mediaHtml != undefined) {
	    contentDiv.innerHTML = mediaHtml;
	}
    }

    for (var i = 0; i < teasers.length; i++) {
	document.getElementById("teasers").innerHTML += teasers[i];
    }

}



