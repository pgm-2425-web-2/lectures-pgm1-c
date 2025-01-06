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

  $video.addEventListener("timeupdate", () => {
    if ($video.duration) {
      console.log($video.currentTime.toFixed(2));
      const percentage = ($video.currentTime / $video.duration) * 100;
      console.log(`${Math.ceil(percentage)}% afgespeeld`);
    }
  });
})();
