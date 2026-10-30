import { useState } from "react"; import Photo from "./Photo"; import { transformations, type Transformation } from "../data/transformations";
function Slider({ t }: { t: Transformation }) {
  const [v, setV] = useState(50);
  return (<div className="rv">
    <div className="ba">
      <Photo src={t.before} alt={`Antes${t.name ? " - " + t.name : ""}`} label="ANTES (foto real da cliente)" />
      <Photo className="af" style={{ clipPath: `inset(0 0 0 ${v}%)` }} src={t.after} alt={`Depois${t.name ? " - " + t.name : ""}`} label="DEPOIS (foto real da cliente)" />
      <div className="hd" style={{ left: `${v}%` }} />
      <input type="range" min={0} max={100} value={v} onChange={e => setV(+e.target.value)} aria-label="Arraste para comparar antes e depois" />
    </div>
    {t.name && <p className="note"><b>{t.name}</b>{t.quote ? ` — “${t.quote}”` : ""}</p>}
  </div>);
}
export default function Transformations() {
  return (
    <section id="transformacoes"><div className="wrap" style={{ textAlign: "center" }}>
      <span className="eyebrow"></span>
      <h2 className="rw">Resultados que <span className="pk">contam histórias.</span></h2>
      <p className="rv" style={{ marginTop: 14 }}>Cada transformação começa com uma decisão.</p>
      {transformations.map((t, i) => <Slider key={i} t={t} />)}
      <p className="note">Espaço reservado: as transformações reais serão inseridas com autorização das clientes.</p>
    </div></section>
  );
}
