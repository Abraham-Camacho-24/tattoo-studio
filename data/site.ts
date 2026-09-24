/** Replace these placeholders with the artist's real details before publishing. */
export const siteConfig = {
  artistName: "ARTIST_NAME",
  location: "LOCATION",
  instagramUrl: "INSTAGRAM_URL",
  instagramLabel: "@INSTAGRAM_HANDLE",
  whatsappNumber: "WHATSAPP_NUMBER",
  whatsappMessage: "Hola, me gustaría conversar sobre un proyecto de tatuaje personalizado.",
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
