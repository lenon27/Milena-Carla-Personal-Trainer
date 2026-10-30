import { useRef, useState } from "react"; import Photo from "./Photo"; import { stories } from "../data/stories";
export default function Stories() {
  const ref = useRef<HTMLDialogElement>(null); const [i, setI] = useState(0); const s = stories[i];
  return (
    <section className="lt" id="historias"><div className="wrap">
      <span className="eyebrow"></span>
      <h2 className="rw">Cada corpo tem <span className="pk">uma história.</span></h2>
      <p className="rv" style={{ marginTop: 14 }}>Mais do que mudar o corpo, existe uma história por trás de cada transformação.</p>
      <div className="stg">{stories.map((x, k) => (
        <article key={k} className="stc rv"><Photo src={x.photo} alt={x.name} label="FOTO DA CLIENTE" />
          <div className="t"><span className="eyebrow">{x.cat}</span><h3>“{x.title}”</h3><p>{x.summary}</p>
            <button aria-label={`Ler história: ${x.title}`} onClick={() => { setI(k); ref.current?.showModal(); }}>LER HISTÓRIA</button></div></article>))}</div>
      <dialog ref={ref} aria-label="História completa" onClick={e => e.target === ref.current && ref.current?.close()}>
        <button className="x" aria-label="Fechar" onClick={() => ref.current?.close()}>✕</button>
        <span className="eyebrow">{s.cat}</span><h3>{s.title}</h3>
        <Photo src={s.photo} alt={s.name} label="FOTO DA CLIENTE" style={{ aspectRatio: "16/9", marginBottom: 16 }} />
        <p style={{ color: "#fff", fontWeight: 800 }}>{s.name}</p>{s.full.map((t, k) => <p key={k}>{t}</p>)}
      </dialog>
    </div></section>
  );
}
