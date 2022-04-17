const waveBox = document.querySelector('.wave_box');
for (let i=0; i <200; i++){
    const wave = document.createElement('span');
    wave.className = 'bar'
    waveBox.appendChild(wave)
}