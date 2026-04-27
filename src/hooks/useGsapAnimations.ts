import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const posters = gsap.utils.toArray<HTMLElement>("[data-project-poster]");

      gsap.from("[data-hero-title] span", {
        yPercent: 120,
        rotate: 4,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
      });

      gsap.from("[data-hero-meta]", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.35,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.to("[data-parallax='hero-shape-one']", {
        yPercent: -32,
        rotate: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-parallax='hero-shape-two']", {
        yPercent: 48,
        rotate: 24,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 72,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-brutal-card]").forEach((card) => {
        gsap.from(card, {
          y: 80,
          rotate: 2,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
          },
        });
      });

      gsap.to("[data-marquee-track]", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".motion-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to("[data-timeline-fill]", {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: ".motion-section",
          start: "top 65%",
          end: "bottom 55%",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-pin-scene]").forEach((scene) => {
        ScrollTrigger.create({
          trigger: scene,
          start: "top top",
          end: "+=65%",
          pin: true,
          pinSpacing: true,
        });
      });

      const handleMouseMove = (event: MouseEvent) => {
        posters.forEach((poster) => {
          const rect = poster.getBoundingClientRect();
          const isInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

          if (!isInside) return;

          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          const mockup = poster.querySelector<HTMLElement>("[data-mouse-layer='mockup']");
          const shapeA = poster.querySelector<HTMLElement>("[data-mouse-layer='shape-a']");
          const shapeB = poster.querySelector<HTMLElement>("[data-mouse-layer='shape-b']");
          const number = poster.querySelector<HTMLElement>("[data-mouse-layer='number']");

          if (mockup) {
            gsap.to(mockup, {
              x: x * 26,
              y: y * 22,
              rotate: x * 4,
              duration: 0.45,
              ease: "power3.out",
            });
          }

          if (shapeA) {
            gsap.to(shapeA, {
              x: x * -38,
              y: y * -28,
              rotate: x * 18,
              duration: 0.55,
              ease: "power3.out",
            });
          }

          if (shapeB) {
            gsap.to(shapeB, {
              x: x * 48,
              y: y * 34,
              rotate: x * -16,
              duration: 0.55,
              ease: "power3.out",
            });
          }

          if (number) {
            gsap.to(number, {
              x: x * 20,
              y: y * 16,
              duration: 0.65,
              ease: "power3.out",
            });
          }
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });

    return () => ctx.revert();
  }, []);
}