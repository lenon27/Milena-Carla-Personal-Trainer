const s = [["Avaliação", "Conhecer seus objetivos, rotina e necessidades."], ["Planejamento", "Criar uma estratégia personalizada."], ["Treino", "Executar o plano com orientação."], ["Acompanhamento", "Analisar sua evolução."], ["Ajustes", "Adaptar o planejamento conforme seus resultados."], ["Evolução", "Construir resultados sustentáveis."]];
export default function Method() {
  return (
    <section className="lt" id="metodo"><div className="wrap">
      <span className="eyebrow"></span>
      <h2 className="rw">Não é sobre começar.<br /><span className="pk">É sobre conseguir continuar.</span></h2>
      <div className="tl">{s.map(([t, d], i) => <div key={t} className="st rv"><b>0{i + 1}</b><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
  );
}
