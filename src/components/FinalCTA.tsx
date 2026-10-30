import WaLink from "./WaLink";

const heroVideo = "/video.mp4";

export default function FinalCTA() {
  return (
    <section className="fin">
      <div className="wrap">
        <h2 className="rw">Chega de começar e parar.<span className="big">Vamos construir sua transformação.</span></h2>
        <p className="rv">Seu objetivo é o meu compromisso.</p>
        <div className="row rv"><WaLink>QUERO COMEÇAR AGORA</WaLink><WaLink className="btn o">FALAR COM A MILENA</WaLink></div>
      </div>
    </section>
  );
}
