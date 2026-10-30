import type { CSSProperties } from "react";
type P = { src?: string; alt: string; label: string; className?: string; style?: CSSProperties; eager?: boolean };
export default function Photo({ src, alt, label, className = "", style, eager }: P) {
  return <div className={`ph ${className}`} style={style}>{src ? <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} /> : label}</div>;
}
