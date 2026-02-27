/* BACKGROUND MUSIC */
(function(){
  const audio=document.getElementById('bgm');
  const btn=document.getElementById('musicToggle');
  const vol=document.getElementById('musicVol');
  if(!audio||!btn||!vol)return;

  const KEY_ON='bolt_music_on';
  const KEY_VOL='bolt_music_vol';

  const savedVol=Number(localStorage.getItem(KEY_VOL));
  const startVol=Number.isFinite(savedVol)&&savedVol>=0&&savedVol<=100?savedVol:28;
  vol.value=startVol;
  audio.volume=startVol/100;

  function paint(isOn){btn.textContent=isOn?'Pause ♪':'Play ♪';}
  async function playAudio(){
    try{await audio.play();localStorage.setItem(KEY_ON,'1');paint(true);}catch{paint(false);} 
  }
  function pauseAudio(){audio.pause();localStorage.setItem(KEY_ON,'0');paint(false);}

  vol.addEventListener('input',()=>{audio.volume=Number(vol.value)/100;localStorage.setItem(KEY_VOL,String(vol.value));});
  btn.addEventListener('click',()=>{if(audio.paused)playAudio();else pauseAudio();});

  if(localStorage.getItem(KEY_ON)==='1')playAudio();
  else paint(false);
})();
