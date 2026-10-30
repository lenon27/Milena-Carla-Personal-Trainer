import Photo from "./Photo"; import { PHOTOS } from "../config";
export default function About() {
  return (
    <section id="sobre"><div className="wrap ab">
      <div className="frame rv"><Photo className="tilt" style={{ aspectRatio: "4/5" }} src={PHOTOS.about} alt="Milena Carla, personal trainer" label="FOTO DA MILENA (SOBRE)" /></div>
      <div>
        <span className="eyebrow"></span>
        <h2 className="rw">Por trás do treino, existe uma pessoa que <span className="pk">acredita em você.</span></h2>
        <p className="rv" style={{ marginTop: 22 }}>Meu trabalho vai muito além de montar treinos.</p>
        <p className="rv" style={{ marginTop: 12 }}>Quero entender sua rotina, seus objetivos e os desafios que fazem você começar e parar.</p>
        <p className="rv" style={{ marginTop: 12 }}>Meu objetivo é criar uma estratégia que faça sentido para você — e ajudar você a construir uma rotina que consiga manter.</p>
        <div className="sig rv">MILENA CARLA<small>PERSONAL TRAINER</small></div>
      </div>
    </div></section>
  );
}
