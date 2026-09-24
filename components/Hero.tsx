import { siteConfig, whatsappHref } from "@/data/site";

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="hero-art" aria-hidden="true" style={{ backgroundImage: `url("${siteConfig.heroImageUrl}")` }} />
    <div className="hero-shade" aria-hidden="true" />
    <div className="shell hero-content">
      <div className="eyebrow hero-eyebrow"><span /> TATUADOR INDEPENDIENTE — {siteConfig.location}</div>
      <h1 id="hero-title">MTZ<br /><em>TATTOO</em></h1>
      <div className="hero-bottom">
        <p>Proyectos de gran escala,<br />diseñados para quedarse contigo.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={whatsappHref} target="_blank" rel="noreferrer">CONSULTAR POR WHATSAPP <b>↗</b></a>
          <a className="text-link" href="#work">VER PORTAFOLIO <b>↓</b></a>
        </div>
      </div>
    </div>
    <a className="scroll-note" href="#about"><span /> DESLIZA PARA EXPLORAR</a>
  </section>;
}
