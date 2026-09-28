export type PortfolioPiece = {
  title: string;
  type: string;
  alt: string;
  image: string;
  aspect: "portrait" | "tall" | "landscape" | "square";
};

/** Replace the `image` paths below with the artist's own photographs. */
export const portfolioPieces: PortfolioPiece[] = [
  { title: "Sombra botánica", type: "Black & grey · brazo", alt: "Tatuaje botánico en tinta negra sobre un brazo", image: "/images/Brazo.jpg", aspect: "portrait" },
  { title: "Arquitectura interior", type: "Custom piece · pierna", alt: "Diseño de tatuaje negro de líneas arquitectónicas", image: "/images/Espalda.jpg", aspect: "tall" },
  { title: "Estudio de movimiento", type: "Large scale · espalda", alt: "Tatuaje artístico de alto contraste", image: "/images/pecho.jpg", aspect: "landscape" },
  { title: "Figura y sombra", type: "Black & grey · brazo", alt: "Tatuaje figurativo en escala de grises", image: "/images/Pierna.jpg", aspect: "square" },
  { title: "Detalle orgánico", type: "Custom piece · antebrazo", alt: "Detalle de tatuaje en tinta negra", image: "/images/Palma.jpg", aspect: "tall" },
  { title: "Composición nocturna", type: "Large scale · torso", alt: "Tatuaje de composición oscura y precisa", image: "/images/cuello.jpg", aspect: "portrait" },
];
