import { useEffect, useState } from "react";
import WaLink from "./WaLink";
const links = [["INÍCIO", "inicio"], ["SOBRE", "sobre"], ["MÉTODO", "metodo"], ["CONSULTORIA", "consultoria"], ["TRANSFORMAÇÕES", "transformacoes"], ["HISTÓRIAS", "historias"], ["CONTATO", "contato"]];
export default function Header() {
  const [s, setS] = useState(false); const [o, setO] = useState(false);
  useEffect(() => {
    const f = () => { setS(window.scrollY > 40); setO(false); };
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={s ? "s" : ""}><div className="wrap">
      <a href="#inicio" className="logo" aria-label="Milena Carla Personal Trainer, início">MILENA<br />CARLA<small>PERSONAL TRAINER</small></a>
      <nav className={o ? "o" : ""} aria-label="Menu principal">{links.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setO(false)}>{l}</a>)}</nav>
      <WaLink className="btn hcta" label="Começar agora pelo WhatsApp">COMEÇAR AGORA</WaLink>
      <button className="burger" aria-label="Abrir menu" aria-expanded={o} onClick={() => setO(!o)}><span /><span /></button>
    </div></header>
  );
}
