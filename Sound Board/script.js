const sounds = ['applause','boo','gasp','tada','victory','wrong'];
const buttons = document.getElementById('buttons');

const stopAllSongs = () => {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
};

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click',()=>{
        stopAllSongs();

        document.getElementById(sound).play();
    })

    buttons.appendChild(btn);
});