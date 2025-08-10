document.addEventListener("DOMContentLoaded", () => {
  let playlist = [];
  let currentTrack = 0;
  let state = false;

  const btn = document.querySelector(".btn");
  const record = document.querySelector(".record");
  const toneArm = document.querySelector(".tone-arm");
  const song = document.querySelector(".my-song");
  const slider = document.querySelector(".slider");
  const btnPlay = document.querySelector(".album-play");

  if (!btn || !record || !toneArm || !song || !slider || !btnPlay) {
    console.error("Algum elemento do player não foi encontrado no DOM.");
    return;
  }

  function loadTrack(index) {
    if (!playlist.length) {
      console.warn("Playlist vazia. Não há música para carregar.");
      return;
    }
    if (index < 0 || index >= playlist.length) {
      console.warn("Índice da música fora do intervalo:", index);
      return;
    }
    song.src = playlist[index];
    song.load();
    console.log("Carregando faixa:", playlist[index]);
  }

  btn.addEventListener("click", () => {
    if (!playlist.length) {
      alert("Selecione um álbum para tocar.");
      return;
    }

    if (!state) {
      toneArm.classList.add("play");

      setTimeout(() => {
        if (toneArm.classList.contains("play")) {
          record.classList.add("on");
          song.play().catch(err => console.error("Erro ao tocar música:", err));
          state = true;
        }
      }, 500);
    } else {
      song.pause();
      record.classList.remove("on");
      toneArm.classList.remove("play");
      state = false;
    }
  });

  slider.addEventListener("input", (e) => {
    song.volume = Number(e.target.value);
  });

  song.addEventListener("ended", () => {
    currentTrack++;
    if (currentTrack >= playlist.length) {
      currentTrack = 0;
    }
    loadTrack(currentTrack);

    if (toneArm.classList.contains("play")) {
      song.play();
    }
  });

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/['"]/g, "")
      .replace(/\s+/g, "-");
  }

  const albunsData = {
    "short-n-sweet": {
      vinilImg: "css/albuns/vinil/ShortNSweet.png",
      musicas: [
        "css/albuns/Short n' Sweet/Taste - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Please Please Please - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Good Graces - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Sharpest Tool - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Coincidence - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Bed Chem - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Espresso - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Dumb _ Poetic - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Slim Pickins - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Juno - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Lie To Girls - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Don't Smile - Sabrina Carpenter.mp3"
      ]
    },
    "mans-best-friend": {
      vinilImg: "css/albuns/vinil/manbestfriendvinil.png",
      musicas: [
        "css/albuns/Man's Best Friend/faixa1.mp3",
        "css/albuns/Man's Best Friend/faixa2.mp3",
        "css/albuns/Man's Best Friend/faixa3.mp3"
      ]
    },
    "emails-i-cant-send": {
      vinilImg: "css/albuns/vinil/EmailICantSend.png",
      musicas: [
        "css/albuns/emails i can't send/Already Over - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Bad for Business - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/because i liked a boy - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/bet u wanna - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/decode - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/emails i can't send - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Fast Times - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Feather - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/how many things - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Lonesome - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Nonsense - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/opposite - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Read your Mind - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/skinny dipping - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Tornado Warnings - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Vicious - Sabrina Carpenter.mp3"
      ]
    }
  };

  btnPlay.addEventListener("click", () => {
    const albumKey = slugify(btnPlay.dataset.album);
    console.log("Álbum selecionado (slug):", albumKey);

    if (albunsData[albumKey]) {
      playlist = albunsData[albumKey].musicas;

      record.style.backgroundImage = `url('${albunsData[albumKey].vinilImg}')`;
      record.style.backgroundSize = "cover";

      currentTrack = 0;
      loadTrack(currentTrack);
      state = false;

      record.classList.remove("on");
      toneArm.classList.remove("play");

      btn.click();

      document.querySelector(".secao").scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Álbum não encontrado na playlist.");
      console.warn("Chave do álbum não encontrada:", albumKey);
    }
  });
});
