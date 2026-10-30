import Photo from "./Photo"; import WaLink from "./WaLink"; import { PHOTOS } from "../config";

const heroVideo = "/video.mp4";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div>
          <span className="eyebrow rv"></span>
          <h1 className="rw">Seu corpo não precisa de mais uma tentativa.<br /><span className="pk">Precisa de estratégia.</span></h1>
          <p className="l rv">Seu corpo não precisa de mais uma tentativa. Precisa de estratégia, constância e um treino que faça sentido para você.</p>
          <p className="l rv" style={{ marginTop: 12 }}>Meu trabalho é te ajudar a construir resultados de verdade, respeitando sua rotina e seus objetivos.</p>
          <div className="row rv"><WaLink>QUERO COMEÇAR MINHA TRANSFORMAÇÃO</WaLink><a className="btn o" href="#metodo">CONHECER MEU MÉTODO</a></div>
        </div>
        <div className="frame rv"><Photo className="himg tilt" src={PHOTOS.hero} alt="Personal trainer Milena Carla" label="FOTO DA MILENA (HERO)" eager /><div className="tag">ATENDIMENTO<br />PRESENCIAL + ONLINE</div></div>
      </div>
    </section>
  );
}
