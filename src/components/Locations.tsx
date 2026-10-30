import WaLink from "./WaLink"; import { MAPS } from "../config";
const L = [["Panobianco Barcelona", MAPS.barcelona], ["Smart Fit Rudge Ramos", MAPS.smartfit]];
export default function Locations() {
  return (
    <section className="dk" id="contato"><div className="wrap">
      <span className="eyebrow"></span>
      <h2 className="rw">Onde você pode <span className="pk">treinar comigo</span></h2>
      <div className="lg">
        {L.map(([n, u]) => <div key={n} className="lc rv"><span>📍</span><h3>{n}</h3><p>Atendimento presencial</p>
          <a className="btn o" href={u || "#contato"} target="_blank" rel="noopener noreferrer" aria-label={`Como chegar: ${n}`}>COMO CHEGAR</a></div>)}
        <div className="lc rv"><span>💻</span><h3>Atendimento Online</h3><p>De onde você estiver</p><WaLink>QUERO TREINAR ONLINE</WaLink></div>
      </div>
    </div></section>
  );
}
