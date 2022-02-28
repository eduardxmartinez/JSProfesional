import MediaPlayer from '@eduardxmartinez/mediaplayerplatzi'
import AutoPlay from '@eduardxmartinez/mediaplayerplatzi/lib/plugins/AutoPlay'
import AutoPause from "@eduardxmartinez/mediaplayerplatzi/lib/plugins/AutoPause";
import Ads from '@eduardxmartinez/mediaplayerplatzi/lib/plugins/Ads'

const video = document.querySelector("video");
const buttonPlay: HTMLElement = document.getElementById("play");
const buttonMute: HTMLElement = document.getElementById("mute");


const player = new MediaPlayer({ 
    el: video,
    plugins: [new AutoPlay(), new AutoPause, new Ads()],
});
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message);
    })
};