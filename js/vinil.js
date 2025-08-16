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
      document.querySelector(".albuns").scrollIntoView({ behavior: "smooth" });
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
    "short-n-sweet-deluxe": {
      vinilImg: "css/albuns/vinil/ShortNSweetDeluxe.webp",
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
        "css/albuns/Short n' Sweet/Don't Smile - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/15 Minutes - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Couldn_t Make It Any Harder - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Busy Woman - Sabrina Carpenter.mp3",
        "css/albuns/Short n' Sweet/Bad Reviews - Sabrina Carpenter.mp3"
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
      vinilImg: "css/albuns/vinil/EmailsICantSend.png",
      musicas: [
        "css/albuns/emails i can't send/emails i cant send - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Vicious - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Read your Mind - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Tornado Warnings - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/because i liked a boy - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Already Over - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/how many things - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/bet u wanna - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Nonsense - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Fast Times - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/skinny dipping - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Bad for Business - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/decode - Sabrina Carpenter.mp3"
      ]
    },
    "emails-i-cant-send-fwd": {
      vinilImg: "css/albuns/vinil/EmailsICantSendFWD.png",
      musicas: [
        "css/albuns/emails i can't send/emails i cant send - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Vicious - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Read your Mind - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Tornado Warnings - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/because i liked a boy - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Already Over - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/how many things - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/bet u wanna - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Nonsense - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Fast Times - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/skinny dipping - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Bad for Business - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/decode - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/opposite - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Feather - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/Lonesome - Sabrina Carpenter.mp3",
        "css/albuns/emails i can't send/things i wish you said - Sabrina Carpenter.mp3"
      ]
    },
    "evolution": {
      vinilImg: "css/albuns/vinil/EVOLution.png",
      musicas: [
        "css/albuns/EVOLution/On Purpose - Sabrina Carpenter.m4a",
        "css/albuns/EVOLution/Feels Like Loneliness - Sabrina Carpenter.m4a",
        "css/albuns/EVOLution/Thumbs - Sabrina Carpenter.m4a",
        "css/albuns/EVOLution/No Words - Sabrina Carpenter.m4a",
        "css/albuns/EVOLution/Run and Hide - Sabrina Carpenter.mp3",
        "css/albuns/EVOLution/Mirage - Sabrina Carpenter.mp3",
        "css/albuns/EVOLution/Don't Want It Back - Sabrina Carpenter.mp3",
        "css/albuns/EVOLution/Shadows - Sabrina Carpenter.mp3",
        "css/albuns/EVOLution/Space - Sabrina Carpenter.mp3",
        "css/albuns/EVOLution/All We Have Is Love - Sabrina Carpenter.mp3"
      ]
    },
    "singular-act-i-": {
      vinilImg: "css/albuns/vinil/Singular Act I.png",
      musicas: [
        "css/albuns/Singular Act I-/Almost Love - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act I-/Paris - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act I-/Hold Tight - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act I-/Sue Me - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act I-/prfct - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act I-/Bad Time - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act I-/Mona Lisa - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act I-/Diamonds Are Forever - Sabrina Carpenter.mp3"
      ]
    },
    "singular-act-ii-": {
      vinilImg: "css/albuns/vinil/Singular Act II.png",
      musicas: [
        "css/albuns/Singular Act II-/In My Bed - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act II-/Pushing 20 - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act II-/I Can't Stop Me - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act II-/I'm Fakin - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act II-/Take Off All Your Cool - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act II-/Tell Em - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act II-/Exhale - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act II-/Take You Back - Sabrina Carpenter.mp3",
        "css/albuns/Singular Act II-/Looking At Me - Sabrina Carpenter.mp3",
      ]
    },
    "honeymoon-fades": {
      vinilImg: "css/albuns/vinil/Honeymoon Fades.png",
      musicas: [
        "css/albuns/Honeymoon Fades/Honeymoon Fades - Sabrina Carpenter.mp3"
      ]
    },
    "eyes-wide-open": {
      vinilImg: "css/albuns/vinil/Eyes Wide Open.png",
      musicas: [
        "css/albuns/Eyes Wide Open/Eyes Wide Open - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/Can't Blame a Girl for Trying - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/The Middle of Starting Over - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/We'll Be The Stars - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/Two Young Hearts - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/Your Love's Like - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/Too Young - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/Seamless - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/Right Now - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/Darling I'm a Mess - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/White Flag - Sabrina Carpenter.mp3",
        "css/albuns/Eyes Wide Open/Best Thing I Got - Sabrina Carpenter.mp3"
      ]
    },
    "espresso": {
      vinilImg: "css/albuns/vinil/Espresso.png",
      musicas: [
        "css/albuns/Short n' Sweet/Espresso - Sabrina Carpenter.mp3",
      ]
    },
    "please-please-please": {
      vinilImg: "css/albuns/vinil/Please Please Please.png",
      musicas: [
        "css/albuns/Short n' Sweet/Please Please Please - Sabrina Carpenter.mp3",
      ]
    },
    "manchild": {
      vinilImg: "css/albuns/vinil/Manchild.png",
      musicas: [
        "css/albuns/Man's Best Friend/Manchild - Sabrina Carpenter.mp3",
      ]
    },
    "taste": {
      vinilImg: "css/albuns/vinil/Taste.png",
      musicas: [
        "css/albuns/Short n' Sweet/Taste - Sabrina Carpenter.mp3",
      ]
    },
    "bed-chem": {
      vinilImg: "css/albuns/vinil/Bed Chem.png",
      musicas: [
        "css/albuns/Short n' Sweet/Bed Chem - Sabrina Carpenter.mp3",
      ]
    },
    "feather": {
      vinilImg: "css/albuns/vinil/Feather.png",
      musicas: [
        "css/albuns/emails i can't send/Feather - Sabrina Carpenter.mp3",
      ]
    },
    "nonsense/a-nonsense-christmas": {
      vinilImg: "css/albuns/vinil/Nonsense.png",
      musicas: [
        "css/albuns/emails i can't send/Nonsense - Sabrina Carpenter.mp3",
        "css/albuns/Fruitcake/A Nonsense Christmas - Sabrina Carpenter.mp3",
      ]
    },
    "fruitcake": {
      vinilImg: "css/albuns/vinil/Fruitcake.png",
      musicas: [
        "css/albuns/Fruitcake/A Nonsense Christmas - Sabrina Carpenter.mp3",
        "css/albuns/Fruitcake/buy me presents - Sabrina Carpenter.mp3",
        "css/albuns/Fruitcake/santa doesn't know you like i do - Sabrina Carpenter.mp3",
        "css/albuns/Fruitcake/cindy lou who - Sabrina Carpenter.mp3",
        "css/albuns/Fruitcake/is it new years yet - Sabrina Carpenter.mp3",
        "css/albuns/Fruitcake/white xmas - Sabrina Carpenter.mp3"
      ]
    }
  }

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
