(() => {
  const $audio = document.getElementById("audio");
  const $btnPlay = document.getElementById("btn-play");

  $btnPlay.addEventListener("click", () => {
    $audio.play();
  });

  $audio.addEventListener("ended", (e) => {
    console.log("Audio is gedaan");
  });
})();
