import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle'; 

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);


function savePlaybackTime(time) {
  localStorage.setItem('videoplayer-current-time', time);
}

function loadPlaybackTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  return parseFloat(savedTime) || 0; 
}

player.on('timeupdate', throttle(function (data) {
  const currentTime = data.seconds;
  savePlaybackTime(currentTime);
}, 1000)); 

player.ready().then(function () {
  const savedTime = loadPlaybackTime();
  player.setCurrentTime(savedTime).then(function () {
    player.play();
  });
});
