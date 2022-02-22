const Version = { version: "0.0.10" };

(async () => {
  console.log("roncho", Version.version);

  CS1.add("a-light", {
    position: "12 12 -12",
    type: "ambient",
    intensity: 1,
  });
  CS1.add("a-light", {
    type: "directional",
    intensity: 2,
    color: "#fff",
    angle: 45,
    position: "-2 2 -3",
  });

  CS1.add("a-troika-text", {
    position: "-3 1 -3",
    value: "Hi, My name is Roncho",
    maxWidth: "1",
    // font-size: "0.016"
  });

  CS1.add("environmentGround", {
    position: "0 0.1 0",
  });

  await CS1.Scene.set("render-order", "background foreground");

  CS1.MyPlayer.setAttribute("render-order", "foreground");

  CS1.Scene.set("environment", {
    preset: "goldmine",
    lighting: "none",
  });
  CS1.MyPlayer.setAvatar({ type: "rigged" });

  CS1.MyPlayer.setAttribute(
    "jump",
    "speed:15 ; landingparticles:dust ; slipstream:default"
  );

  CS1.add("a-gltf-model", {
    src: "https://cdn.glitch.global/95e18358-2a3a-4840-9733-2b7d034968d2/roncho.glb?v=1645537804621",
    position: "-2 2 -3",
    animation:
      "property: rotation; from: 0 -30 0; to: 0 330 0; dur: 15000; easing: linear; loop: true",
    scale: "1 1 1",
  });

  CS1.add("a-jukebox", {
    names: "myname",
    src: "https://cdn.glitch.global/95e18358-2a3a-4840-9733-2b7d034968d2/%5BBTCLOD.COM%5D%20Eminem%20-%20My%20Name%20Is%20%5BHQ%20Lyrics%5D-320k.mp3?v=1645537810681",
    position: "-1 1 -3",
    scale: "1 1 1"
  });

  CS1.Game.start();
})();

//   CS1.add("a-gltf-model", {
//     src: "https://cdn.glitch.global/3ad972ad-6ef8-429f-95cd-105a84375d77/app-3d-st.glb?v=1643249925041",
//     position: "0 0 0",
//     scale: "1 1 1",
//   });

// const log = document.createElement("a-log");
// log.setAttribute("position", "-5  3 -12");
// CS1.Scene.appendChild(log);
// CS1.Scene.set("stats");

// const juke = await CS1.add("a-jukebox", {
//   position: "0 2 -1.5",
//   scale: "2 2 2",
// });
// juke.set("render-order", "background");

// CS1.add("gltf-instances", { count: 1000 });

// const greenBlob = await CS1.add("cs1-particles", {
//   preset: "greenBlob",
//   position: "-3 2 -1.5",
// });
// const fire = await CS1.add("cs1-particles", {
//   preset: "fire",
//   position: "3 2 -1.5",
// });
// const fireworks = await CS1.add("cs1-particles", { position: "0 8 -6" });
// const energyDisc = await CS1.add("cs1-particles", {
//   preset: "energyDisc",
//   position: "-7 0 -1.5",
// });
// const vortex = await CS1.add("cs1-particles", {
//   preset: "vortex",
//   position: "7 2 -1.5",
// });

// const rain = await CS1.add("cs1-particles", {
//   preset: "rain",
//   position: "17 10 -1.5",
// });

//   c const butterSlider = await CS1.create("cs1-slider", {
//     title: "Butteriness",
//     titlecolor: "red",
//     min: 1,
//     max: 100,
//     startvalue: 50,
//   });
//   butterSlider.addEventListener("change", (e) => {
//     console.log(`Butteriness : ${e.detail}`);
//   });
//   const greaseSlider = await CS1.create("cs1-slider", {
//     title: "Greasiness",
//     titlecolor: "red",
//     min: 1,
//     max: 100,
//     startvalue: 50,
//   });
//   greaseSlider.addEventListener("change", (e) => {
//     console.log(`Greasiness : ${e.detail}`);
//   });

//   CS1.UI.layout(1, 2, [butterSlider, greaseSlider], {
//     position: "4 1.6 -6",
//   });

/*

<cs1-panel
        id="right-panel"
        position="2.8 2.1 -.75"
        rotation="0 -45 0"
        width="3"
        height="2"
        borderwidth="0.1"
        topleftradius=".35"
        bottomrightradius=".35"
      ></cs1-panel>



*/

//# sourceMappingURL=cs1-neon-demo.js.map
