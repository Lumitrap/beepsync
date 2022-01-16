var keyName = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

synth1 = new beepbox.Synth("9n10s0k0l00e00t0ua2g00j00r0i0o1T6v0u06f0qg04d04W7E0bwp110");
synth2 = new beepbox.Synth("9n10s0k0l00e00t0ua2g00j00r0i0o1T6v0u06f0qg04d04W7E0bwp110");
synth3 = new beepbox.Synth("9n10s0k0l00e00t0ua2g00j00r0i0o1T6v0u06f0qg04d04W7E0bwp110");
synth4 = new beepbox.Synth("9n10s0k0l00e00t0ua2g00j00r0i0o1T6v0u06f0qg04d04W7E0bwp110");

$("#userInput, #userInput2, #userInput3, #userInput4").bind('focus',function () {
    $(this).select();
});
//------------SLIDERS-------------
var volumeVar = document.getElementById("volume");
var output1 = document.getElementById("volumeOut");
var tempoVar = document.getElementById("tempo");
var output2 = document.getElementById("tempoOut");
var keyVar = document.getElementById("key");
var output4 = document.getElementById("keyOut");
output1.innerHTML = volumeVar.value;
output2.innerHTML = tempoVar.value;
output4.innerHTML = keyVar.value;

volumeVar.oninput = function() {
	output1.innerHTML = this.value;
	synth1.volume = volumeVar.value;
	synth2.volume = volumeVar.value;
	synth3.volume = volumeVar.value;
	synth4.volume = volumeVar.value;
	
};
tempoVar.oninput = function() {
	output2.innerHTML = this.value;
	synth1.song.tempo = parseInt(tempoVar.value);
	synth2.song.tempo = parseInt(tempoVar.value);
	synth3.song.tempo = parseInt(tempoVar.value);
	synth4.song.tempo = parseInt(tempoVar.value);
	
};
keyVar.oninput = function() {
	output4.innerHTML = this.value;
	synth1.song.key = parseInt(keyVar.value);
	synth2.song.key = parseInt(keyVar.value);
	synth3.song.key = parseInt(keyVar.value);
	synth4.song.key = parseInt(keyVar.value);
};
$(document).on('input change', '#key', function () {
	$('#keyOut').html(keyName[ $("#key").val() ])
});
//-------------------------------------------
function updateSliders() {
	output1.innerHTML = synth1.volume;
	document.getElementById("volume").value = synth1.volume;
	output2.innerHTML = synth1.song.tempo;
	document.getElementById("tempo").value = synth1.song.tempo;
	output4.innerHTML = synth1.song.key;
	document.getElementById("key").value = synth1.song.key;
	$('#keyOut').html(keyName[$("#key").val()]);
}
//-----------Playback Functions----------
function playSound() {
	fixPlayhead();
	synth1.play();
	synth2.play();
	synth3.play();
	synth4.play();
	playBtnSet(true)
}
function fixPlayhead() {
	synth2.playhead = synth1.playhead;
	synth3.playhead = synth1.playhead;
	synth4.playhead = synth1.playhead;
}
function pauseSound() {
	synth1.pause();
	synth2.pause();
	synth3.pause();
	synth4.pause();
	playBtnSet(false)
}
function restartSound() {
	AllSnapToStart();
}
function stopSound() {
	pauseSound();
	playBtnSet(false)
	AllSnapToStart();
}
function AllSnapToStart(){
	synth1.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
} 
function AllResetEffects(){
	synth1.resetEffects();
	synth2.resetEffects();
	synth3.resetEffects();
	synth4.resetEffects();
}
function snapToBarAll(){
	synth1.snapToBar();
  	synth2.snapToBar();
  	synth3.snapToBar();
  	synth4.snapToBar();
}
function forwardSound() {
	snapToBarAll();
  	synth1.goToNextBar();
  	synth2.goToNextBar();
  	synth3.goToNextBar();
  	synth4.goToNextBar();
}
function rewindSound() {
	snapToBarAll();
	synth1.goToPrevBar();
  	synth2.goToPrevBar();
  	synth3.goToPrevBar();
  	synth4.goToPrevBar();
}
//----------BeepBox Link------------
var input, input2, input3, input4, newstring, newstring2, newstring3, newstring4;
function beepSend(pass) {
	pauseSound();
	AllResetEffects();
	AllSnapToStart();
	switch (pass) {
		case 1:
			input = document.getElementById("userInput").value;
			newstring = input.substring(input.indexOf("#") + 1).replace('song=','');
			synth1.setSong(newstring);

		case 2:
			input2 = document.getElementById("userInput2").value;
			newstring2 = input2.substring(input2.indexOf("#") + 1).replace('song=','');
			synth2.setSong(newstring2);
			break;
		case 3:
			input3 = document.getElementById("userInput3").value;
			newstring3 = input3.substring(input3.indexOf("#") + 1).replace('song=','');
			synth3.setSong(newstring3);
			break;
		case 4:
			input4 = document.getElementById("userInput4").value;
			newstring4 = input4.substring(input4.indexOf("#") + 1).replace('song=','');
			synth4.setSong(newstring4);
			break;
		default:
	}

	synth1.song.tempo = synth2.song.tempo = synth3.song.tempo = synth4.song.tempo = parseInt(synth1.song.tempo);
	synth1.song.key = synth2.song.key = synth3.song.key = synth4.song.key = parseInt(synth1.song.key);
	if ($('#userInput').val() != '') {
		playSound();
		updateSliders();
	}
	if ($('#userInput').val() != '' && $('#userInput2').val() != '' && $('#userInput3').val() != '' && $('#userInput4').val() != '') {
		$('#userInput').css("color", "#98f");
		$('#userInput2').css("color", "#25f3ff");
		$('#userInput3').css("color", "#ffff25");
		$('#userInput4').css("color", "#ff9752");
		$('#userInput, #userInput2, #userInput3, #userInput4').addClass("flash");
	}
	else if($('#userInput').val() == ''){
		$('#userInput').removeClass("flash");
		$('#userInput').addClass("flash");
	}
	else {
		$('#userInput, #userInput2, #userInput3, #userInput4').css("color", "#9988ff");
		$('#userInput, #userInput2, #userInput3, #userInput4').removeClass("flash");
	}
	if ($('#userInput').val() == '' && $('#userInput2').val() == '' && $('#userInput3').val() == '' && $('#userInput4').val() == '') {
		pauseSound();
	}
}
$(".downArrow").click(function () {
	$(".downArrow").toggleClass("downArrowRotate");
    $downArrow = $(this);
    $content = $(".content");
    $content.slideToggle(0, function () {
        $downArrow.text(function () {  
        });
    });
});

$('#userInput').focus(function () {
	$(this).attr('placeholder', 'Beepbox.co/#9n31s0k0...')}).blur(function(){$(this).attr('placeholder', 'BeepBox link 1')
})
$('#userInput2').focus(function () {
	$(this).attr('placeholder', 'Beepbox.co/#9n31s0k0...')}).blur(function(){$(this).attr('placeholder', 'BeepBox link 2')
})
$('#userInput3').focus(function () {
	$(this).attr('placeholder', 'Beepbox.co/#9n31s0k0...')}).blur(function(){$(this).attr('placeholder', 'BeepBox link 3')
})
$('#userInput4').focus(function () {
	$(this).attr('placeholder', 'Beepbox.co/#9n31s0k0...')}).blur(function(){$(this).attr('placeholder', 'BeepBox link 4')
})

function playBtnSet(bool) {
	if (bool) {
		console.log("set isPlaying to true.")
		$(".playBtn").text("Pause").addClass('btnPlaying');
		isPlaying = true;
		
	}
	else {
		console.log("set isPlaying to false.")
		$(".playBtn").text("Play").removeClass('btnPlaying');
		isPlaying = false;
		
	}
}
function playBtn() {
	console.log("clicked it");
	if (isPlaying) {
		pauseSound();
	}
	else {
		playSound();
	}
}

