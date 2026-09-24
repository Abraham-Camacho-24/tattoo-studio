import { siteConfig } from "@/data/site";

export function About() {
  return <section id="about" className="section about shell reveal">
    <div className="section-kicker"><span>01</span> EL ARTISTA</div>
    <div className="about-grid">
      <div><p className="eyebrow">{siteConfig.artistName} / {siteConfig.location}</p><h2>La piel es<br /><em>el lienzo.</em></h2></div>
      <div className="about-copy"><p>ARTIST_DESCRIPTION — Un enfoque personal para obras de gran formato y piezas a medida, donde cada línea responde al cuerpo que la lleva.</p><p>El proceso comienza con una conversación: tu historia, referencias e intuición se convierten en una composición irrepetible.</p><a className="text-link" href="#process">CONOCE EL PROCESO <b>→</b></a></div>
    </div>
  </section>;
}
