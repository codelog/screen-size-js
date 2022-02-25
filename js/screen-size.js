let scrWidth 	= document.getElementById('width');
let scrHeight 	= document.querySelector("#height span");

//  ON LOAD PAGE
window.onload = function() {
	scrWidth.innerHTML 	= window.innerWidth;
	scrHeight.innerHTML = window.innerHeight;
};

//  ON RESIZE PAGE
window.onresize = function() {
	scrWidth.innerHTML 	= window.innerWidth; 
	scrHeight.innerHTML = window.innerHeight;
};