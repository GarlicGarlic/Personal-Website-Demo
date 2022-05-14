var colourScheme = 1;
var _ = document.documentElement;
var x2;
var y2;
var mWi = window.innerWidth/2
var mHi = window.innerHeight/2
var div = mHi*mWi / 5000;
var gravityOn = true;
// alert(div);
var dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (dark == true)	{	colourScheme=0;	}
colourMode()

function colourMode()	{
	if (colourScheme === 0)	{
		_.style.setProperty('--background-colour-main', '#060606');
		_.style.setProperty('--h1-colour', '#fdfdfd');
		_.style.setProperty('--header-colour', '#fdfdfd');
		_.style.setProperty('--p-colour', '#f6f6f6');
		_.style.setProperty('--fresh-link-colour', '#eee');
		_.style.setProperty('--gradient-link-colour', 'linear-gradient(to right top, #0f4, #0f8, #0fc, #0ff, #0cf)');
		_.style.setProperty('--gradient-inverse-colour', 'linear-gradient(to right top, #00f, #80f, #c0f, #f44, #f60)');
		_.style.setProperty('--mouse-colour', 'invert(100%)');
		_.style.setProperty('--filled-arrow-colour', 'invert(60%) sepia(47%) saturate(839%) hue-rotate(135deg) brightness(102%) contrast(106%)');
		// document.getElementById('source').src = "./gravity-black-inwards.mp4";
		// document.getElementById('light').classList.remove = 'fas';
		// document.getElementById('light').classList.add = 'far';
		colourScheme = 1;
	}
	else if (colourScheme === 1)	{
		_.style.setProperty('--background-colour-main', '#fefefe');
		_.style.setProperty('--h1-colour', '#060606');
		_.style.setProperty('--header-colour', '#060606');
		_.style.setProperty('--p-colour', '#161616');
		_.style.setProperty('--fresh-link-colour', '#111');
		_.style.setProperty('--gradient-link-colour', 'linear-gradient(to right top, #00f, #80f, #c0f, #f44, #f60)');
		_.style.setProperty('--gradient-inverse-colour', 'linear-gradient(to right top, #0f4, #0f8, #0fc, #0ff, #0cf)');
		_.style.setProperty('--mouse-colour', 'invert(0%)');
		_.style.setProperty('--filled-arrow-colour', 'invert(50%) sepia(47%) saturate(5539%) hue-rotate(2deg) brightness(102%) contrast(106%)');
		// document.getElementById('source').src = "./gravity-white-inwards.mp4";
		// document.getElementById('light').classList.remove = 'far';
		// document.getElementById('light').classList.add = 'fas';
		colourScheme = 0;
	}
}

function cursorSize(scale)	{
	// alert(parseInt(document.getElementById("mouse-svg").style.height));
	let height = parseInt(document.getElementById("mouse-svg").style.height) + scale;
	let width = parseInt(document.getElementById("mouse-svg").style.width) + scale;
	if (height < 14 || width < 14)	{
		height = 14;
		width = 14;
	}
	if (height > 50 || width > 50)	{
		height = 50;
		width = 50;
	}
	document.getElementById("mouse-svg").style.height = height + "px";
	document.getElementById("mouse-svg").style.width = width + "px";
	// document.getElementById("test").innerHTML = width;
	// let size = Number(_.style.getPropertyValue('--mouse-size').replace( /^\D+/g, '')) + scale;
	// if (size < 14)	{
	// 	size = 14;
	// }
	// if (size > 50)	{
	// 	size = 50;
	// }
	// // alert(size);
	// _.style.setProperty('--mouse-size', size + "px");
	// console.log(size);
}

document.onmousemove = function()	{
	moveMouse();
}

window.onscroll = function() {
	// moveMouse();
	moveElements();
	fadeInMain();
};

function moveMouse() {
	let x = event.clientX;
	let y = event.clientY;
	// var a = window.pageXOffset;
	// var b = window.pageYOffset;
	if (typeof x === "undefined")	{
		x = x2;
		y = y2;
	}
	else	{
		x2 = x;
		y2 = y;
	}
	_.style.setProperty('--mouse-x', x + "px");
	_.style.setProperty('--mouse-y', y + "px");
	// alert(mHi);
	// if ((x-mWi)*(y-mHi) > 0)	{
	_.style.setProperty('--deg-x', -(y-mHi)/(div) + "deg");
	_.style.setProperty('--deg-y', (x-mWi)/(div) + "deg");
	// _.style.setProperty('--deg-x2', -(y-mHi)/(2*div) + "deg");
	// _.style.setProperty('--deg-y2', (x-mWi)/(2*div) + "deg");
	// if (gravityOn === true)	{
	_.style.setProperty('--deg-gravity', (180/Math.PI) * Math.atan2((y-(mHi+2)),(x-(mWi-8))) - 65 + "deg");
	_.style.setProperty('--x-gravity', + 10 + "px");
	_.style.setProperty('--y-gravity', + 14 + "px");
	// }
	// else {
	// _.style.setProperty('--deg-gravity', 0 + "deg");
	// _.style.setProperty('--x-gravity', + 15 + "px");
	// _.style.setProperty('--y-gravity', + 15 + "px");
	// }
	// }
	// else {
	// 	_.style.setProperty('--deg-x', (x-mWi)/40 + "deg");
	// 	_.style.setProperty('--deg-y', (y-mHi)/40 + "deg");
	// }
	
}

function moveElements()	{
	let y = window.pageYOffset;
	_.style.setProperty('--slow', 0.25 * y + "px");
	_.style.setProperty('--med', -0 * y + "px");
	_.style.setProperty('--fast', -0.5 * y + "px");
}

function fadeInMain()	{
	let y = window.pageYOffset;	
	n = (y-900)/5
	_.style.setProperty('--opacity', n + "%");
}

function gravityButton()	{
	if (document.getElementById('video').paused)	{
		document.getElementById('video').play();
		gravityOn = true;
	}
	else	{
		document.getElementById('video').pause();
		gravityOn = false;
	}
}