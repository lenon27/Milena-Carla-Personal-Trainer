import { useRef } from "react"; import Photo from "./Photo"; import { testimonials } from "../data/testimonials";
export default function Testimonials() {
  const r = useRef<HTMLDivElement>(null); const go = (d: number) => r.current?.scrollBy({ left: d * 340, behavior: "smooth" });
  return (
    <section className="dk"><div className="wrap">
      <span className="eyebrow"></span>
      <h2 className="rw">Elas decidiram <span className="pk">não desistir.</span></h2>
      <div className="car" ref={r} tabIndex={0} aria-label="Depoimentos">{testimonials.map((t, i) => (
        <figure key={i} className="tc"><Photo src={t.photo} alt={t.name} label="FOTO" /><blockquote style={{ color: "#ddd" }}>{t.text}</blockquote><figcaption className="pk" style={{ marginTop: 12, fontWeight: 800 }}>{t.name}</figcaption></figure>))}</div>
      <div className="cn"><button aria-label="Anterior" onClick={() => go(-1)}>←</button><button aria-label="Próximo" onClick={() => go(1)}>→</button></div>
    </div></section>
  );
}
