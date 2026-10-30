import heroImage from "./assets/images/milena.jpg";

// ===== CONFIGURAÇÕES FÁCEIS DE EDITAR =====
export const WHATSAPP_NUMBER = "5511999999999";
export const WA_MSG = "Olá, Milena! Vi seu site e gostaria de saber mais sobre seus treinos e a Consultoria Online.";
export const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/personal_milenacarla/";
export const INSTAGRAM_HANDLE = "@personal_milenacarla";
// Cole aqui os links do Google Maps
export const MAPS = { barcelona: "", smartfit: "" };
// Fotos reais: use os imports da pasta src/assets/images
export const PHOTOS = { hero: heroImage, about: "", cta: "" };
export const INSTAGRAM_POSTS: string[] = []; // URLs das imagens do grid (opcional)
