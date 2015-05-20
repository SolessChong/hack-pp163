var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.

likes = jQuery('.w-btnDimGray');
for (var i = 0; i < likes.length; i ++){
	if (Math.random() > 0.4)
		likes[i].click();
}
