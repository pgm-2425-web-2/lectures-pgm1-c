(() => {
  const $video = document.getElementById("video");
  const $btn = document.getElementById("btn-play");

  $btn.addEventListener("click", () => {
    if ($video.paused) {
      $video.play();
      $btn.innerText = "Pause";
    } else {
      $video.pause();
      $btn.innerText = "Play";
    }
  });

  $video.addEventListener("timeupdate", (e) => {
    console.log(e);
  });
})();
