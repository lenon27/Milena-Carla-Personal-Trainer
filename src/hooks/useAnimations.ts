import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);
const $ = (s: string) => Array.from(document.querySelectorAll<HTMLElement>(s));
export function useAnimations() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mob = matchMedia("(max-width:960px)").matches;
    let lenis: Lenis | undefined;
    const tick = (t: number) => lenis?.raf(t * 1000);
    if (!mob) { lenis = new Lenis(); lenis.on("scroll", ScrollTrigger.update); gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0); }
    const ctx = gsap.context(() => {
      $(".rw").forEach(e => gsap.from(e, { y: mob ? 24 : 60, opacity: 0, duration: mob ? .55 : 1, ease: "power3.out", scrollTrigger: { trigger: e, start: mob ? "top 96%" : "top 88%" } }));
      $(".rv").forEach(e => gsap.from(e, { y: mob ? 16 : 40, opacity: 0, duration: mob ? .45 : .9, ease: "power3.out", scrollTrigger: { trigger: e, start: mob ? "top 97%" : "top 90%" } }));
      $(".quote .ln").forEach((l, i) => gsap.from(l, { x: i % 2 ? 80 : -80, opacity: 0, duration: 1, scrollTrigger: { trigger: l, start: "top 85%" } }));
      $("[data-f]").forEach((e, i) => gsap.to(e, { y: i % 2 ? -30 : 30, duration: 3 + i, repeat: -1, yoyo: true, ease: "sine.inOut" }));
      if (!mob) {
        gsap.from(".hero .himg", { scale: 1.12, opacity: 0, duration: 1.8, ease: "power2.out" });
        gsap.to(".hero .frame", { yPercent: -8, scrollTrigger: { trigger: ".hero", scrub: true, start: "top top", end: "bottom top" } });
        $(".tilt").forEach(el => {
          el.addEventListener("mousemove", (e: MouseEvent) => { const r = el.getBoundingClientRect(); gsap.to(el, { rotateY: ((e.clientX - r.left) / r.width - .5) * 10, rotateX: -((e.clientY - r.top) / r.height - .5) * 10, duration: .4, transformPerspective: 800 }); });
          el.addEventListener("mouseleave", () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: .6 }));
        });
      }
    });
    return () => { ctx.revert(); gsap.ticker.remove(tick); lenis?.destroy(); };
  }, []);
}
