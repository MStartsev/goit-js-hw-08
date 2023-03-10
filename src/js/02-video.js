import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const currentTimeKey = 'videoplayer-current-time';
const currentTime = Number(localStorage.getItem(currentTimeKey));
const throttleTime = 1000;

player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(onPlay, throttleTime));

function onPlay(time) {
  localStorage.setItem(currentTimeKey, time.seconds);
}
