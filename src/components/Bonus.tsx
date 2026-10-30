const heroVideo = "/video.mp4";

export default function Bonus() {
  return (
    <section className="bonus" aria-label="Bônus especial"><div className="wrap">
      <div className="bonus-visual">
        <video className="bonus-video bonus-video-left" src={heroVideo} autoPlay loop muted playsInline preload="auto" aria-label="Vídeo decorativo lateral esquerdo" />
        <div className="star" role="img" aria-label="Estrela bônus" />
        <video className="bonus-video bonus-video-right" src={heroVideo} autoPlay loop muted playsInline preload="auto" aria-label="Vídeo decorativo lateral direito" />
      </div>
      <span className="eyebrow">⭐ BÔNUS ESPECIAL</span>
      <h2 className="rw">Duas aulas presenciais<br />a cada 15 dias.</h2>
      <h3 className="pk" style={{ fontSize: "1.6rem", marginTop: 18 }}>2 AULAS PRESENCIAIS / MÊS</h3>
      <p>Encontro presencial para avaliação, correção de execução, ajustes e alinhamento do seu plano.</p>
    </div></section>
  );
}
