import WaLink from "./WaLink"; import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../config"; import instaImage from "../assets/images/insta.png"; import whatsImage from "../assets/images/WhatsApp.png";
export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="logo">MILENA<br />CARLA<small>PERSONAL TRAINER</small></div>
      <div><h4>ESPECIALIDADES</h4><p>Emagrecimento<br />Definição muscular<br />Treinamento feminino</p><h4 style={{ marginTop: 14 }}>ATENDIMENTO</h4><p>Presencial<br />Online</p></div>
      <div><h4>LOCAIS</h4><p>Panobianco Barcelona<br />Smart Fit Rudge Ramos</p></div>
      <div><h4>CONTATO</h4><p><a className="footer-instagram" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><img src={instaImage} alt="Instagram" />{INSTAGRAM_HANDLE}</a><br /><WaLink className="footer-whatsapp"><img src={whatsImage} alt="WhatsApp" />Falar com a Milena</WaLink></p></div>
      <p className="cp">© 2026 Milena Carla. Todos os direitos reservados.</p>
    </div></footer>
  );
}
