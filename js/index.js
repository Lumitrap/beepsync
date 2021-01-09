var keyName = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
var v = $("#key").val();

var synth1 = new beepbox.Synth("");
var synth2 = new beepbox.Synth("");
var synth3 = new beepbox.Synth("");
var synth4 = new beepbox.Synth("");

//------------SLIDERS-------------
var volumeVar = document.getElementById("volume");
var output1 = document.getElementById("volumeOut");
output1.innerHTML = volumeVar.value;
volumeVar.oninput = function() {
	output1.innerHTML = this.value;
	synth1.volume = volumeVar.value;
	synth2.volume = volumeVar.value;
	synth3.volume = volumeVar.value;
	synth4.volume = volumeVar.value;

};

var tempoVar = document.getElementById("tempo");
var output2 = document.getElementById("tempoOut");
output2.innerHTML = tempoVar.value;
tempoVar.oninput = function() {
	output2.innerHTML = this.value;
	synth1.song.tempo = parseInt(tempoVar.value);
	synth2.song.tempo = parseInt(tempoVar.value);
	synth3.song.tempo = parseInt(tempoVar.value);
	synth4.song.tempo = parseInt(tempoVar.value);
};
var reverbVar = document.getElementById("reverb");
var output3 = document.getElementById("reverbOut");
output3.innerHTML = reverbVar.value;
reverbVar.oninput = function() {
	output3.innerHTML = this.value;
	synth1.song.reverb = parseInt(reverbVar.value);
	synth2.song.reverb = parseInt(reverbVar.value);
	synth3.song.reverb = parseInt(reverbVar.value);
	synth4.song.reverb = parseInt(reverbVar.value);
};
var keyVar = document.getElementById("key");
var output4 = document.getElementById("keyOut");
output4.innerHTML = keyVar.value;
keyVar.oninput = function() {
	output4.innerHTML = this.value;
	synth1.song.key = parseInt(keyVar.value);
	synth2.song.key = parseInt(keyVar.value);
	synth3.song.key = parseInt(keyVar.value);
	synth4.song.key = parseInt(keyVar.value);
};
//-------------------------------------------
$(document).ready(function () {
	synth1.setSong();
	synth2.setSong();
	synth3.setSong();
	synth4.setSong();
});
function updateSliders() {
	output1.innerHTML = synth1.volume;
	document.getElementById("volume").value = synth1.volume;
	output2.innerHTML = synth1.song.tempo;
	document.getElementById("tempo").value = synth1.song.tempo;
	output3.innerHTML = synth1.song.reverb;
	document.getElementById("reverb").value = synth1.song.reverb;
	output4.innerHTML = synth1.song.key;
	document.getElementById("key").value = synth1.song.key;
	$('#keyOut').html(keyName[$("#key").val()]);
}
//-----------LEFT BUTTONS----------
function playSound(button, name) {
	synth1.play();
	synth2.play();
	synth3.play();
	synth4.play();
}
function pauseSound(button, name) {
	synth1.pause();
	synth2.pause();
	synth3.pause();
	synth4.pause();
}
function restartSound(button, name) {
	synth1.play();
	synth2.play();
	synth3.play();
	synth4.play();
	synth1.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
}
function stopSound(button, name) {
	synth1.pause();
	synth2.pause();
	synth3.pause();
	synth4.pause();
	synth1.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	// updateSliders();
}
function forwardSound(button, name) {
	synth1.snapToBar();
  synth2.snapToBar();
  synth3.snapToBar();
  synth4.snapToBar();
  synth1.nextBar();
  synth2.nextBar();
  synth3.nextBar();
  synth4.nextBar();
}
function rewindSound(button, name) {
	synth1.snapToBar();
  synth2.snapToBar();
  synth3.snapToBar();
  synth4.snapToBar();
	synth1.prevBar();
  synth2.prevBar();
  synth3.prevBar();
  synth4.prevBar();
}
//----------BeepBox Link------------
function beepSend() {
	var input = document.getElementById("userInput").value;
	var newstring = input.substring(input.indexOf("#") + 1).replace('song=','');
	synth1.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	synth1.setSong(newstring);
	synth1.play();
	synth2.play();
	synth3.play();
	synth4.play();
	updateSliders();
	if ($('#userInput').val() != '') {
		$('#userInput').css("background", "black");
		// $('#userInput').css("color", "#25f3ff");
	}
	else{
		// $('#userInput').css("color", "#98f");
	}
}
function beepSend2() {
	var input2 = document.getElementById("userInput2").value;
	var newstring2 = input2.substring(input2.indexOf("#") + 1).replace('song=','');
	synth1.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	synth2.setSong(newstring2);
	synth1.play();
	synth2.play();
	synth3.play();
	synth4.play();
	updateSliders();
	synth2.volume = parseInt(synth1.volume);
	synth2.song.tempo = parseInt(synth1.song.tempo);
	synth2.song.reverb = parseInt(synth1.song.reverb);
	synth2.song.key = parseInt(synth1.song.key);
	if ($('#userInput2').val() != '') {
		$('#userInput2').css("background", "black");
	}
	else{
	}
}
function beepSend3() {
	var input3 = document.getElementById("userInput3").value;
	var newstring3 = input3.substring(input3.indexOf("#") + 1).replace('song=','');
	synth1.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	synth3.setSong(newstring3);
	synth1.play();
	synth2.play();
	synth3.play();
	synth4.play();
	updateSliders();
	synth3.volume = parseInt(synth1.volume);
	synth3.song.tempo = parseInt(synth1.song.tempo);
	synth3.song.reverb = parseInt(synth1.song.reverb);
	synth3.song.key = parseInt(synth1.song.key);
	if ($('#userInput3').val() != '') {
		$('#userInput3').css("background", "black");
	}
	else{
	}
}
function beepSend4() {
	var input4 = document.getElementById("userInput4").value;
	var newstring4 = input4.substring(input4.indexOf("#") + 1).replace('song=','');
	synth1.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	synth4.setSong(newstring4);
	synth1.play();
	synth2.play();
	synth3.play();
	synth4.play();
	updateSliders();
	synth4.volume = parseInt(synth1.volume);
	synth4.song.tempo = parseInt(synth1.song.tempo);
	synth4.song.reverb = parseInt(synth1.song.reverb);
	synth4.song.key = parseInt(synth1.song.key);
	if ($('#userInput4').val() != '') {
		$('#userInput4').css("background", "black");
	}
	if (jQuery('#userInput, #userInput2, #userInput3, #userInput4').val() != '') {
		$('#userInput').css("color", "#98f");
		$('#userInput2').css("color", "#25f3ff");
		$('#userInput3').css("color", "#ffff25");
		$('#userInput4').css("color", "#ff9752");
	}
	else{
		
	}
}
$(".downArrow").click(function () {
	// $(".downArrow").remove();
	$(".downArrow").toggleClass("downArrowRotate");
    $downArrow = $(this);
    $content = $(".content");
    $content.slideToggle(0, function () {
        $downArrow.text(function () {  
        });
    });
});

$(document).on('input change', '#key', function () {
	var v = $("#key").val();
	$('#keyOut').html(keyName[v])
});

$('#keyOut').html(keyName[v]);

$('#userInput').focus(function () {
	$(this).attr('placeholder', 'Beepbox.co/#8n31s0k0...')}).blur(function(){$(this).attr('placeholder', 'BeepBox link 1')
})
$('#userInput2').focus(function () {
	$(this).attr('placeholder', 'Beepbox.co/#8n31s0k0...')}).blur(function(){$(this).attr('placeholder', 'BeepBox link 2')
})
$('#userInput3').focus(function () {
	$(this).attr('placeholder', 'Beepbox.co/#8n31s0k0...')}).blur(function(){$(this).attr('placeholder', 'BeepBox link 3')
})
$('#userInput4').focus(function () {
	$(this).attr('placeholder', 'Beepbox.co/#8n31s0k0...')}).blur(function(){$(this).attr('placeholder', 'BeepBox link 4')
})