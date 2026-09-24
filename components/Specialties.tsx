const specialties = [
  ["01", "LARGE SCALE", "Composiciones pensadas para brazos, espalda y pierna."],
  ["02", "CUSTOM WORK", "Diseños construidos contigo, desde la primera idea."],
  ["03", "BLACK & GREY", "Contraste, profundidad y detalle que envejece con intención."],
  ["04", "ARTISTIC PIECES", "Obras personales con una lectura única sobre la piel."],
];
export function Specialties() { return <section className="specialties"><div className="shell"><div className="section-kicker"><span>02</span> ESPECIALIDAD</div><div className="specialty-list">{specialties.map(([number, title, copy]) => <article key={number} className="specialty"><span>{number}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}</div></div></section>; }
