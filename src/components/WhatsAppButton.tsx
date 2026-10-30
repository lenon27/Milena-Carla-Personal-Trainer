import { WA_LINK } from "../config";
import whatsImage from "../assets/images/Whats.png";
export default function WhatsAppButton() {
  return (
    <a className="wa" href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Milena pelo WhatsApp">
      <img src={whatsImage} alt="" aria-hidden="true" />
    </a>
  );
}
