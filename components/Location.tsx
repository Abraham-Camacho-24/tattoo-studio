import { siteConfig } from "@/data/site";

const locationDetails = [
  ["STUDIO ADDRESS", siteConfig.studioAddress],
  ["CITY", siteConfig.city],
  ["HOURS", siteConfig.openingHours],
];

export function Location() {
  return (
    <section className="location section" id="location" aria-labelledby="location-title">
      <div className="shell location-grid">
        <div className="location-info reveal">
          <div className="section-kicker"><span>05</span> UBICACIÓN</div>
          <h2 id="location-title">LOCATION</h2>
          <p className="location-copy">Visita el estudio para conversar sobre tu próxima pieza y conocer el espacio.</p>
          <dl className="location-details">
            <div><dt>STUDIO</dt><dd>{siteConfig.studioName}</dd></div>
            {locationDetails.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <a className="button button-outline location-button" href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">ABRIR EN GOOGLE MAPS <b>↗</b></a>
        </div>
        <div className="location-map reveal">
          <iframe
            title={`Mapa de ${siteConfig.locationName}`}
            src={siteConfig.googleMapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
