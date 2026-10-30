const items = [["01", "Emagrecimento", "Estratégias de treino para ajudar você a evoluir, ganhar condicionamento e construir uma rotina sustentável."], ["02", "Definição muscular", "Treinamento estruturado para quem busca mais definição, força e evolução estética."], ["03", "Treinamento feminino", "Treinos pensados para as necessidades, objetivos e rotina de mulheres."]];
export default function Specialties() {
  return (
    <section className="dk"><div className="wrap">
      <span className="eyebrow"></span>
      <h2 className="rw">Treino com propósito.<br /><span className="pk">Resultado com estratégia.</span></h2>
      <p className="rv" style={{ maxWidth: 640, marginTop: 22 }}>Meu trabalho é ajudar você a construir resultados reais através de um treinamento pensado para o seu corpo, sua rotina e seus objetivos.</p>
      <div className="sg">{items.map(([n, t, d]) => <article key={n} className="sc tilt rv"><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>
  );
}
