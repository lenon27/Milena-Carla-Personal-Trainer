import type { ReactNode } from "react";
import { WA_LINK } from "../config";
export default function WaLink({ children, className = "btn", label }: { children: ReactNode; className?: string; label?: string }) {
  return <a className={className} href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}</a>;
}
