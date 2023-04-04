var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Video Paused");

});

document.querySelector("#slower").addEventListener("click", function(){
	onetenth_rate = video.playbackRate/10;
	new_rate = video.playbackRate - onetenth_rate;
	video.playbackRate = new_rate;
	console.log("Video rate is", new_rate);
});

document.querySelector("#faster").addEventListener("click", function(){
	onetenth_rate_faster = video.playbackRate/10;
	new_rate_fast = video.playbackRate + onetenth_rate_faster;
	video.playbackRate = new_rate_fast;
	console.log("Video rate is", new_rate_fast);
});

document.querySelector("#skip").addEventListener("click", function(){
	current_time = video.currentTime;
	new_time = current_time + 10;
	if (new_time >= video.duration) {
		new_time = 0;
	}
	video.currentTime = new_time;
	console.log("Current video duration is:", new_time)
});

document.querySelector("#mute").addEventListener("click", function(){
	if (!video.muted){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video Muted");

	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video Unmuted");
	}
});


document.querySelector("#slider").addEventListener("change", function(){

	current_value = document.querySelector("#slider").value;
	console.log("Current Slider Value:", current_value);


	video.volume = current_value/100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";

});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
	console.log("Old School applied")
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
	console.log("Old School removed")
});