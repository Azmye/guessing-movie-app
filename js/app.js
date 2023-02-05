const playBtn = document.querySelector('.play-btn');
const placeholder = document.querySelector('.video-placeholder');
const videoPlayer = document.querySelector('.video-player');
const answerForm = document.querySelector('form');
const recordList = document.querySelector('.record-list');
const reseBtn = document.querySelector('.resetter');
const score = document.querySelector('.score');

answerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const term = answerForm.movie.value.trim().toLowerCase();

  fetchMovie('/search/movie', `?api_key=${key}&query=${term}`)
    .then((movie) => {
      return movie;
    })
    .then((movie) => {
      if (movie.results[0].id === getMovieInfo.id) {
        recordAnswer(getMovieInfo.title, true);
        videoPlayerResetter();
      } else {
        recordAnswer(getMovieInfo.title, false);
        videoPlayerResetter();
      }
    })
    .catch((err) => err);
});

reseBtn.addEventListener('click', (e) => {
  videoPlayerResetter();
  answerForm.reset();
});

playBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let videoKey;

  fetchMovie(`/movie/${movieIds[generateNumber()]}`, `?api_key=${key}&append_to_response=videos`)
    .then((movie) => {
      videoKey = movie.videos.results;
      playVideo(videoKey[1].key != undefined ? videoKey[1].key : videoKey[0].key);
      return movie;
    })
    .then((movie) => {
      const id = movie.id;
      const title = movie.title;
      getMovieInfo = { id, title };
      console.log(movie);
    })
    .then(() => getMovieInfo)
    .catch((err) => err);
  //   playVideo('UaVTIH8mujA');
});
