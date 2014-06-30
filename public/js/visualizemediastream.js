function visualizeMediaStream(stream) {
	audioContext = new webkitAudioContext();
	analyser = audioContext.createAnalyser();
	microphone = audioContext.createMediaStreamSource(stream);
	javascriptNode = audioContext.createJavaScriptNode(2048, 1, 1);

	analyser.smoothingTimeConstant = 0.3;
	analyser.fftSize = 1024;

	microphone.connect(analyser);
	analyser.connect(javascriptNode);
	javascriptNode.connect(audioContext.destination);

	canvasContext = document.getElementById('audio_graph');
	canvasContext= canvasContext.getContext("2d");

	javascriptNode.onaudioprocess = function() {
	    var array =  new Uint8Array(analyser.frequencyBinCount);
	    analyser.getByteFrequencyData(array);
	    var values = 0;

	    var length = array.length;
	    for (var i = 0; i < length; i++) {
	        values += array[i];
	    }

	    var average = values / length;
        canvasContext.clearRect(0, 0, 300, 150);
        canvasContext.fillStyle = '#ff0000';
        canvasContext.fillRect(0,150-average,300,150);
        //console.log(average);
	};
}
