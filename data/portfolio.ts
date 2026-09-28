export type PortfolioPiece = {
  title: string;
  type: string;
  alt: string;
  image: string;
  aspect: "portrait" | "tall" | "landscape" | "square";
};

export const portfolioPieces: PortfolioPiece[] = [
  {
    title: "Fauna del bosque",
    type: "Black & grey · manga de brazo",
    alt: "Manga de brazo en black and grey con un lobo, cráneo, cuervo, flores y mariposas",
    image: "/images/Brazo.jpg",
    aspect: "portrait",
  },
  {
    title: "Retrato entre flores",
    type: "Black & grey · espalda completa",
    alt: "Tatuaje de espalda completa en black and grey con un retrato femenino, flores, cráneos y mariposas",
    image: "/images/Espalda.jpg",
    aspect: "tall",
  },
  {
    title: "Geometría simbólica",
    type: "Geométrico · pecho",
    alt: "Tatuaje geométrico en el pecho con un ojo central, una polilla y un reloj de arena",
    image: "/images/Pecho.jpg",
    aspect: "landscape",
  },
  {
    title: "Lobo y bosque",
    type: "Geométrico · pierna",
    alt: "Tatuaje geométrico de gran formato en la pierna con un lobo, bosque y montañas",
    image: "/images/Pierna.jpg",
    aspect: "square",
  },
  {
    title: "Mandala de mano",
    type: "Geométrico · dorso de la mano",
    alt: "Tatuaje geométrico con mandala y patrones de puntos en el dorso de la mano y los dedos",
    image: "/images/Palma.jpg",
    aspect: "tall",
  },
  {
    title: "Mandala de cuello",
    type: "Geométrico · cuello",
    alt: "Tatuaje geométrico de mandala en el cuello que se extiende hacia las clavículas",
    image: "/images/Cuello.jpg",
    aspect: "portrait",
  },
  {
    title: "Mandala de espalda",
    type: "Geométrico · espalda completa",
    alt: "Tatuaje geométrico de espalda completa con un gran mandala central y patrones simétricos",
    image: "/images/Espalda2.jpg",
    aspect: "tall",
  },
  {
    title: "Patrón geométrico",
    type: "Geométrico · hombro y brazo",
    alt: "Tatuaje geométrico en negro sobre el hombro y la parte superior del brazo",
    image: "/images/Hombro.jpg",
    aspect: "square",
  },
];
