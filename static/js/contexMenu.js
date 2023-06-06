// remove contex menu
function disablecontext(e) {
	var clickedEl = (e == null) ? e.srcElement.tagName : e.target.tagName;
	if (clickedEl == "CANVAS" || clickedEl == "DIV") {
		return false;
	}
}
document.oncontextmenu = disablecontext;