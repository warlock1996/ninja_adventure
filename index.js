var ninja = document.getElementById("ninja");
var kunai = document.getElementById("kunai");
var base = document.getElementById("base");

window.addEventListener("load", () => Idle());
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    Run();
  } else if (e.key === "a") {
    Attack();
  } else if (e.key === "s") {
    Throw();
    Kunai();
  } else if (e.key === "d" || e.key === "ArrowDown") {
    Slide();
  } else if (e.key === " " || e.key === "ArrowUp") {
    Jump();
  }
});

function Run() {
  let ninjanim = ninja.animate(
    {
      backgroundImage: actions.Run,
      easing: "ease-in-out",
    },
    {
      composite: "add",
      duration: 800,
      iterations: 1,
    }
  );
  moveBackground();
}
function Attack() {
  ninja.animate(
    {
      backgroundImage: actions.Attack,
      easing: "ease-in-out",
    },
    {
      duration: 800,
      iterations: 1,
    }
  );
}
function Idle() {
  ninja.animate(
    {
      backgroundImage: actions.Idle,
      easing: "ease-in-out",
    },
    {
      duration: 800,
      iterations: Infinity,
    }
  );
}
function Jump() {
  ninja.animate(
    {
      backgroundImage: actions.Jump,
      easing: "ease-in-out",
    },
    {
      duration: 800,
      iterations: 1,
    }
  );

  moveBackground();
}
function Slide() {
  ninja.animate(
    {
      backgroundImage: actions.Slide,
      easing: "ease-in-out",
    },
    {
      duration: 800,
      iterations: 1,
    }
  );

  moveBackground();
}
function Throw() {
  ninja.animate(
    {
      backgroundImage: actions.Throw,
      easing: "ease-in-out",
    },
    {
      duration: 800,
      iterations: 1,
    }
  );
}
function Kunai() {
  kunai.style.display = "block";
  let kunaianim = kunai.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(" + window.innerWidth + "px)" },
    ],
    {
      duration: 300,
      iterations: 1,
    }
  );
  kunaianim.finished.then(() => {
    kunai.style.display = "none";
  });
}
function Dead() {
  ninja.animate(
    {
      backgroundImage: actions.Throw,
      easing: "ease-in-out",
    },
    {
      duration: 800,
      iterations: 1,
    }
  );
}
function moveBackground() {
  base.animate(
    [{ backgroundPositionX: "0" }, { backgroundPositionX: "-200px" }],
    {
      fill: "both",
      duration: 1000,
    }
  );
}

var actions = {
  Idle: [
    'url("./images/Idle__000.png")',
    'url("./images/Idle__001.png")',
    'url("./images/Idle__002.png")',
    'url("./images/Idle__003.png")',
    'url("./images/Idle__004.png")',
    'url("./images/Idle__005.png")',
    'url("./images/Idle__006.png")',
    'url("./images/Idle__007.png")',
    'url("./images/Idle__008.png")',
    'url("./images/Idle__009.png")',
  ],
  Run: [
    'url("./images/Run__000.png")',
    'url("./images/Run__001.png")',
    'url("./images/Run__002.png")',
    'url("./images/Run__003.png")',
    'url("./images/Run__004.png")',
    'url("./images/Run__005.png")',
    'url("./images/Run__006.png")',
    'url("./images/Run__007.png")',
    'url("./images/Run__008.png")',
    'url("./images/Run__009.png")',
  ],
  Jump: [
    'url("./images/Jump__000.png")',
    'url("./images/Jump__001.png")',
    'url("./images/Jump__002.png")',
    'url("./images/Jump__003.png")',
    'url("./images/Jump__004.png")',
    'url("./images/Jump__005.png")',
    'url("./images/Jump__006.png")',
    'url("./images/Jump__007.png")',
    'url("./images/Jump__008.png")',
    'url("./images/Jump__009.png")',
  ],
  Attack: [
    'url("./images/Attack__000.png")',
    'url("./images/Attack__001.png")',
    'url("./images/Attack__002.png")',
    'url("./images/Attack__003.png")',
    'url("./images/Attack__004.png")',
    'url("./images/Attack__005.png")',
    'url("./images/Attack__006.png")',
    'url("./images/Attack__007.png")',
    'url("./images/Attack__008.png")',
    'url("./images/Attack__009.png")',
  ],
  Slide: [
    'url("./images/Slide__000.png")',
    'url("./images/Slide__001.png")',
    'url("./images/Slide__002.png")',
    'url("./images/Slide__003.png")',
    'url("./images/Slide__004.png")',
    'url("./images/Slide__005.png")',
    'url("./images/Slide__006.png")',
    'url("./images/Slide__007.png")',
    'url("./images/Slide__008.png")',
    'url("./images/Slide__009.png")',
  ],
  Throw: [
    'url("./images/Throw__000.png")',
    'url("./images/Throw__001.png")',
    'url("./images/Throw__002.png")',
    'url("./images/Throw__003.png")',
    'url("./images/Throw__004.png")',
    'url("./images/Throw__005.png")',
    'url("./images/Throw__006.png")',
    'url("./images/Throw__007.png")',
    'url("./images/Throw__008.png")',
    'url("./images/Throw__009.png")',
  ],
  Dead: [
    'url("./images/Dead__000.png")',
    'url("./images/Dead__001.png")',
    'url("./images/Dead__002.png")',
    'url("./images/Dead__003.png")',
    'url("./images/Dead__004.png")',
    'url("./images/Dead__005.png")',
    'url("./images/Dead__006.png")',
    'url("./images/Dead__007.png")',
    'url("./images/Dead__008.png")',
    'url("./images/Dead__009.png")',
  ],
};
