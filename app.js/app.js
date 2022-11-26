const sounds = ['gong'];

sounds.forEach((sound) => {
  const icon = document.createElement(icon);
  icon.classList.add('option');
  icon.innerText = sound;

  icon.addEventListener('click', () => {
    document.getElementById(sound).play()
  })
  document.getElementById('option').appendChild(icon);
});
function stopSong(){
sounds.forEach((sound) => {
  const song = document.getElementById(sound);
  
  song.pause();
  song.currentTime = 0;})

}


