// - Radio Control -
var radio = document.getElementById('radio');
var currentSongDisplay = document.getElementById('current-song');

function changeChannel(streamUrl) {
    radio.src = streamUrl;
    radio.play(); // Kanal değiştiğinde otomatik olarak çalmaya başlar
}

radio.addEventListener('play', updateCurrentSong);
radio.addEventListener('pause', updateCurrentSong);

function updateCurrentSong() {
    if (!radio.paused) {
        // currentSongDisplay.textContent = 'Şarkı Devam Ediyor...'; // Buraya şarkı adı ve sanatçısını dinamik olarak ekleyebilirsiniz.
    } else {
        // currentSongDisplay.textContent = 'Şarkı Duraklatıldı!';
    }
}


function playSong(streamUrl) {
    var audio = document.getElementById('radio');
    audio.src = streamUrl;
    audio.play();

    // Şarkı bilgisini güncelleyebilirsiniz, örneğin:
    // document.getElementById('current-song').textContent = 'Şu anda çalan şarkı: ' + songTitle;
}
