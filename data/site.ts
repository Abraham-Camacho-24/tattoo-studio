/** Replace these placeholders with the artist's real details before publishing. */
export const siteConfig = {
  artistName: "ARTIST_NAME",
  location: "LOCATION",
  instagramUrl: "INSTAGRAM_URL",
  instagramLabel: "@INSTAGRAM_HANDLE",
  whatsappNumber: "WHATSAPP_NUMBER",
  whatsappMessage: "Hola, me gustaría conversar sobre un proyecto de tatuaje personalizado.",
  // Replace this demo photograph with /public/images/hero-tattoo.jpg when the artist's final image is available.
  heroImageUrl: "https://images.unsplash.com/photo-1565058379802-bbe93b2c4e1f?auto=format&fit=crop&w=2400&q=90",
  locationName: "LOCATION_NAME",
  studioName: "STUDIO_NAME",
  studioAddress: "STUDIO_ADDRESS",
  city: "CITY",
  openingHours: "OPENING_HOURS",
  googleMapsUrl: "GOOGLE_MAPS_URL",
  googleMapsEmbedUrl: "GOOGLE_MAPS_EMBED_URL",
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
