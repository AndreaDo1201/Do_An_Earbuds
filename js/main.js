(() => {
  // console.log("JS file is connected")
  const hotspots = document.querySelectorAll(".Hotspot");
  //console.log(hotspots);

  const infoBoxes = [
    {
      title: "Volumn Slider",
      text: "Adjust the audio volume with a somple physical or touch-sensitive slider.",
      image: "images/ar_icon.png",
    },
    {
      title: "Fast & Save Electric Charger",
      text: "Charger your earbuds within 1 hours but usage time is up to 36 hours",
      image: "images/ar_icon.png",
    },
    {
      title: "LED logo & Noise Cancellation",
      text: "With a simple tap on the logo noise cancellation will be activated, you will know if the noise cancellation is on or not by seeing the light in the logo.",
      image: "images/ar_icon.png",
    },
    {
      title: "Silicon Bud",
      text: "Soft silicon texture safe for your ears skin and protects your music from outside noises. With 360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.",
      image: "images/ar_icon.png",
    },
    {
      title: "Turn on/off tap",
      text: "You can easily to turn on/off your music or accept/decline a call just a simple tap on the side.",
      image: "images/ar_icon.png",
    },
  ];

  //function

  function loadInfo() {
    infoBoxes.forEach((infoBoxes, index) => {
      // console.log(index+1);
      //selected will be the infoBox on our page, e.g hotspot-1, hotspot-2, etc
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      console.log(selected);

      //let create an h2
      const titleElement = document.createElement(`h2`);
      //lets populate the h2
      titleElement.textContent = infoBoxes.title;

      //lets create an p
      const textElement = document.createElement(`p`);
      //lets populate the p
      textElement.textContent = infoBoxes.text;

      //lets create an img
      const imageElement = document.createElement(`img`);
      imageElement.src = imageElement.alt = "";

      //let's add the h2 to the selected hotspot
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }

  loadInfo();

  function showInfo() {
    console.log(`#${this.slot}`);
    // console.log("#"+ this.slot); //This is how they used to do the console log
    const selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    console.log("hideInfo Called");
    const selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();
