function splitHand() {
    const hand = document.querySelector('.hand');
    const textContainer = document.querySelector('.text-container-puño');
  
    const tl = gsap.timeline();
  
    tl.to(hand, { scaleY: 0, ease: 'power2.inOut', duration: 0.3 })
      .to(textContainer, { opacity: 1, duration: 0.3 });
  }

   // Crea una instancia del controlador ScrollMagic
   const controller = new ScrollMagic.Controller();

   // Define la escena para el efecto de golpe
   const scene = new ScrollMagic.Scene({
     triggerElement: "#puño", // Elemento que activará el efecto
     triggerHook: 0.5, // Punto de activación relativo a la ventana visible (0.5 = centro)
     reverse: false // Mantener el efecto activado después de hacer scroll hacia arriba
   })
   .on("enter", function () {
     // Código que se ejecutará cuando se active el efecto de golpe
     gsap.to(".hand", { rotation: 360, duration: 0.5, ease: "power4.out" });
   })
   .addTo(controller);