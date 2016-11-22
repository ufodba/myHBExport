$(function(){
	getTime();
	console.log($("#nowAudio")[0].duration);
	function getTime() {
		setTimeout(function () {
		var duration = $("#nowAudio")[0].duration;
		if(isNaN(duration)){
		getTime();
		}
		else{
		console.info("该歌曲的总时间为："+$("#nowAudio")[0].duration+"秒")
		}
		}, 10);
	}
	
});