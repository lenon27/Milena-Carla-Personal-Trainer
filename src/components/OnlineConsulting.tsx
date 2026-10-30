import WaLink from "./WaLink";
const b = [["Treino 100% personalizado", "Montado do zero, respeitando seus objetivos, sua rotina e suas limitações."], ["Flexibilidade total", "Escolha treinar em casa ou na academia."], ["Treino no app com vídeos", "Acesse seu plano de forma organizada e veja a execução correta de cada exercício."], ["Feedbacks semanais", "Análise da sua evolução e ajustes no plano para garantir progresso contínuo."], ["Suporte via WhatsApp", "Tire suas dúvidas diretamente comigo e receba o suporte necessário para não desistir."]];
export default function OnlineConsulting() {
  return (
    <section className="lt" id="consultoria"><div className="wrap on">
      <div>
        <span className="eyebrow"></span>
        <h2 className="rw">Leve meu método<br />para <span className="pk">onde você estiver.</span></h2>
        <p className="rv" style={{ marginTop: 18 }}>Com a Consultoria Online você tem a flexibilidade de treinar em casa ou na academia, no seu próprio ritmo, mas com todo o meu acompanhamento, suporte para não perder o foco e um plano pensado para alcançar seus objetivos.</p>
        {b.map(([t, d]) => <div key={t} className="bn rv"><i>✓</i><div><h3>{t}</h3><p>{d}</p></div></div>)}
        <div className="row rv"><WaLink>QUERO CONHECER A CONSULTORIA</WaLink></div>
      </div>
      <div className="rv" aria-label="Ilustração de aplicativo de treino (mockup)"><div className="phone">
        <small>SEU TREINO • ILUSTRATIVO</small><h4>Treino A — <span className="pk">Inferiores</span></h4>
        {[ ["Agachamento", "4 séries • vídeo"], ["Elevação pélvica", "4 séries • vídeo"], ["Passada", "3 séries • vídeo"] ].map(([n, s]) => <div key={n} className="ex"><u>▶</u><div>{n}<span>{s}</span></div></div>)}
        <div className="ex" style={{ background: "var(--pk)" }}><div>Feedback semanal enviado ✓</div></div>
      </div></div>
    </div></section>
  );
}
