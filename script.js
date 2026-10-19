const particles =
  document.getElementById("particles");


/* ==================================
   LOADING
================================== */

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader =
      document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }

  }, 1500);

});


/* ==================================
   BACKGROUND PARTICLES
================================== */

function createParticle() {

  if (!particles) return;

  const particle =
    document.createElement("span");

  particle.className =
    "particle";

  const symbols =
    ["♡", "♥", "✦", "·"];

  particle.textContent =
    symbols[
      Math.floor(
        Math.random() *
        symbols.length
      )
    ];

  particle.style.left =
    Math.random() * 100 + "vw";

  particle.style.fontSize =
    Math.random() * 11 + 7 + "px";

  particle.style.animationDuration =
    Math.random() * 8 + 8 + "s";

  particles.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 17000);

}

setInterval(
  createParticle,
  700
);


/* ==================================
   OPENING STORY
================================== */

let storyStarted = false;

function startStory() {

  if (storyStarted) return;

  storyStarted = true;

  const button =
    document.querySelector(".start-btn");

  const scene =
    document.getElementById(
      "openingScene"
    );

  if (button) {

    button.style.opacity = ".3";

    button.style.pointerEvents =
      "none";

    button.textContent =
      "tunggu bentar... ♡";

  }


  /*
    Teks akan muncul satu per satu.
  */

  const texts = [

    "sebenernya aku bingung mulai dari mana.",

    "karena kadang satu kata maaf aja rasanya nggak cukup.",

    "jadi... aku nyoba nyampeinnya dengan cara aku sendiri.",

    "aku cuma mau mendekat dan bilang sesuatu ke kamu."

  ];


  let index = 0;


  function showStoryText() {

    let story =
      document.getElementById(
        "storyText"
      );


    if (!story) {

      story =
        document.createElement(
          "div"
        );

      story.id =
        "storyText";

      story.className =
        "story-text";

      scene.appendChild(story);

    }


    story.classList.remove(
      "active"
    );


    setTimeout(() => {

      story.textContent =
        texts[index];

      story.classList.add(
        "active"
      );

      index++;


      if (
        index <
        texts.length
      ) {

        setTimeout(
          showStoryText,
          2100
        );

      }

      else {

        setTimeout(() => {

          story.classList.remove(
            "active"
          );

          startWalking();

        }, 1900);

      }

    }, 400);

  }


  showStoryText();

}


/* ==================================
   HUSEN WALKS TO IKE
================================== */

function startWalking() {

  const scene =
    document.getElementById(
      "openingScene"
    );


  scene.classList.add(
    "walking"
  );


  setTimeout(() => {

    scene.classList.add(
      "together"
    );

  }, 300);


  /*
    Stop bounce after reaching Ike
  */

  setTimeout(() => {

    scene.classList.remove(
      "walking"
    );

  }, 2700);


  /*
    Continue to letter
  */

  setTimeout(() => {

    openLetter();

  }, 4300);

}


/* ==================================
   OPEN LETTER
================================== */

function openLetter() {

  const letter =
    document.getElementById(
      "letter"
    );

  if (!letter) return;


  letter.style.display =
    "flex";


  setTimeout(() => {

    letter.scrollIntoView({
      behavior: "smooth"
    });

  }, 100);


  /*
    Heading animation
  */

  setTimeout(() => {

    letter
      .querySelectorAll(
        ".reveal"
      )
      .forEach(
        (element, index) => {

          setTimeout(() => {

            element.classList.add(
              "show"
            );

          }, index * 250);

        }
      );

  }, 600);


  /*
    Paragraph animation
  */

  setTimeout(() => {

    revealLetter();

  }, 1100);

}


/* ==================================
   LETTER PARAGRAPHS
================================== */

function revealLetter() {

  const paragraphs =
    document.querySelectorAll(
      ".letter-card p"
    );


  paragraphs.forEach(
    (paragraph, index) => {

      setTimeout(() => {

        paragraph.classList.add(
          "visible"
        );

      }, index * 350);

    }
  );

}


/* ==================================
   NEXT SECTION
================================== */

function goBeforeEnd() {

  const section =
    document.getElementById(
      "beforeEnd"
    );


  if (!section) {

    /*
      Kalau section beforeEnd belum
      dibuat, langsung final.
    */

    goFinal();

    return;

  }


  section.style.display =
    "flex";


  section.scrollIntoView({
    behavior: "smooth"
  });


  setTimeout(() => {

    revealBeforeMessages();

  }, 700);

}


/* ==================================
   BEFORE END TEXT
================================== */

function revealBeforeMessages() {

  const messages =
    document.querySelectorAll(
      ".message-line"
    );


  messages.forEach(
    (message, index) => {

      setTimeout(() => {

        message.classList.add(
          "visible"
        );

      }, index * 650);

    }
  );

}


/* ==================================
   FINAL
================================== */

function goFinal() {

  const final =
    document.getElementById(
      "final"
    );


  if (!final) return;


  final.style.display =
    "flex";


  final.scrollIntoView({
    behavior: "smooth"
  });

}


/* ==================================
   FORGIVE
================================== */

let forgiven = false;

function forgive() {

  if (forgiven) return;

  forgiven = true;


  const scene =
    document.getElementById(
      "finalScene"
    );

  const button =
    document.getElementById(
      "forgiveBtn"
    );

  const accepted =
    document.getElementById(
      "accepted"
    );


  if (scene) {

    scene.classList.add(
      "walking"
    );

    setTimeout(() => {

      scene.classList.add(
        "together"
      );

    }, 250);


    setTimeout(() => {

      scene.classList.remove(
        "walking"
      );

    }, 2600);

  }


  if (button) {

    button.textContent =
      "♡";

    button.style.pointerEvents =
      "none";

    button.style.transform =
      "scale(.9)";

  }


  setTimeout(() => {

    pinkFlash();

    heartBurst();

  }, 2200);


  setTimeout(() => {

    if (accepted) {

      accepted.classList.add(
        "visible"
      );

    }

  }, 2700);

}


/* ==================================
   PINK FLASH
================================== */

function pinkFlash() {

  let flash =
    document.getElementById(
      "pinkFlash"
    );


  if (!flash) {

    flash =
      document.createElement(
        "div"
      );

    flash.id =
      "pinkFlash";

    document.body.appendChild(
      flash
    );

  }


  flash.classList.add(
    "active"
  );


  setTimeout(() => {

    flash.classList.remove(
      "active"
    );

  }, 450);

}


/* ==================================
   HEART EXPLOSION
================================== */

function heartBurst() {

  if (!particles) return;


  for (
    let i = 0;
    i < 55;
    i++
  ) {

    setTimeout(() => {

      const heart =
        document.createElement(
          "span"
        );


      heart.className =
        "particle";


      heart.textContent =
        Math.random() > .25
          ? "♥"
          : "♡";


      heart.style.left =
        (
          25 +
          Math.random() * 50
        ) + "vw";


      heart.style.bottom =
        (
          5 +
          Math.random() * 25
        ) + "vh";


      heart.style.fontSize =
        (
          Math.random() * 18 +
          8
        ) + "px";


      heart.style.color =
        "#ff69ad";


      heart.style.animationDuration =
        (
          Math.random() * 3 +
          3
        ) + "s";


      particles.appendChild(
        heart
      );


      setTimeout(() => {

        heart.remove();

      }, 7000);


    }, i * 35);

  }

}


/* ==================================
   SCROLL REVEAL
================================== */

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("show");

          }

        }
      );

    },

    {
      threshold: .15
    }

  );


document
  .querySelectorAll(
    ".reveal"
  )
  .forEach(element => {

    observer.observe(
      element
    );

  });


/* ==================================
   SMALL MOUSE GLOW
================================== */

const mouseGlow =
  document.createElement(
    "div"
  );


mouseGlow.style.cssText = `

  position: fixed;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255,79,163,.08),
      transparent 65%
    );

  pointer-events: none;

  z-index: -2;

  transform:
    translate(-50%,-50%);

  transition:
    left .15s ease,
    top .15s ease;

`;


document.body.appendChild(
  mouseGlow
);


document.addEventListener(
  "mousemove",
  event => {

    mouseGlow.style.left =
      event.clientX + "px";

    mouseGlow.style.top =
      event.clientY + "px";

  }
);
