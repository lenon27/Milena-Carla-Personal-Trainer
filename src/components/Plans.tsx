import WaLink from "./WaLink";
const f = ["Treino 100% personalizado", "Treinos em casa ou academia", "App com vídeos e orientações", "Feedback semanal", "Ajustes do plano", "Suporte pelo WhatsApp", "2 aulas presenciais por mês"];
export default function Plans() {
  return (
    <section className="lt"><div className="wrap" style={{ textAlign: "center" }}>
      <span className="eyebrow"></span>
      <h2 className="rw">Escolha a forma de treinar<br /><span className="pk">que faz sentido para você.</span></h2>
      <div className="pl rv"><h3 style={{ fontSize: "2rem", color: "#111" }}>Consultoria Online</h3>
        <ul style={{ marginTop: 16, padding: 0 }}>{f.map(x => <li key={x}>{x}</li>)}</ul>
        <div className="bt">⭐ BÔNUS ESPECIAL — 2 aulas presenciais a cada 15 dias.</div>
        <WaLink>QUERO CONHECER A CONSULTORIA</WaLink></div>
    </div></section>
  );
}
