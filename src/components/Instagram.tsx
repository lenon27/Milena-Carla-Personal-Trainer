import Photo from "./Photo"; import { INSTAGRAM_URL, INSTAGRAM_HANDLE, INSTAGRAM_POSTS } from "../config";
export default function Instagram() {
  const posts = INSTAGRAM_POSTS.length ? INSTAGRAM_POSTS : ["", "", "", ""];
  return (
    <section><div className="wrap" style={{ textAlign: "center" }}>
      <span className="eyebrow"></span>
      <h2 className="rw">Acompanhe a <span className="pk">Milena</span></h2>
      <p style={{ marginTop: 10, fontWeight: 800, color: "#fff" }}>{INSTAGRAM_HANDLE}</p>
      <div className="ig">{posts.map((p, i) => <Photo key={i} src={p} alt={`Post ${i + 1} do Instagram da Milena Carla`} label="POST" style={{ background: "#151515" }} />)}</div>
      <a className="btn" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">SEGUIR NO INSTAGRAM</a>
    </div></section>
  );
}
