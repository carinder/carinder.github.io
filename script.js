var timeRotation = 270;
var d = new Date();

function rotateChart() {
	//Clock Method of Testing Rotation
	var d = new Date();

	var second = d.getSeconds();
	//var percent = second / 60;
	var sideRotate = 270
	//Actual Percent Time
	var weekDay = d.getDay();
	var hour = d.getHours();
	var minute = d.getMinutes();
	if (weekDay=2){
		var percent = (minute/60)+(second/3600);
		document.getElementById("percent").innerHTML = Math.round(percent*100) + "%";
	};

	if (percent >=.5){
		document.getElementById("cover").style.background = "#e60000";
		var sideRotate = 270;
	} else {
		document.getElementById("cover").style.background = "gray";
		var sideRotate = 90;
	};

	var timeRotation = sideRotate+(percent * 360);
	document.getElementById("coverBox").style.transform = "rotate("+timeRotation+"deg)";
	//setTimeout(rotateChart,100);
}

setInterval(rotateChart, 100);