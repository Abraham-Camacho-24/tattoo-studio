export type PortfolioPiece = {
  title: string;
  type: string;
  alt: string;
  image: string;
  aspect: "portrait" | "tall" | "landscape" | "square";
};

/** Replace the `image` paths below with the artist's own photographs. */
export const portfolioPieces: PortfolioPiece[] = [
  { title: "Sombra botánica", type: "Black & grey · brazo", alt: "Tatuaje botánico en tinta negra sobre un brazo", image: "/images/portfolio-01.svg", aspect: "portrait" },
  { title: "Arquitectura interior", type: "Custom piece · pierna", alt: "Diseño de tatuaje negro de líneas arquitectónicas", image: "/images/portfolio-02.svg", aspect: "tall" },
  { title: "Estudio de movimiento", type: "Large scale · espalda", alt: "Tatuaje artístico de alto contraste", image: "/images/portfolio-03.svg", aspect: "landscape" },
  { title: "Figura y sombra", type: "Black & grey · brazo", alt: "Tatuaje figurativo en escala de grises", image: "/images/portfolio-04.svg", aspect: "square" },
  { title: "Detalle orgánico", type: "Custom piece · antebrazo", alt: "Detalle de tatuaje en tinta negra", image: "/images/portfolio-05.svg", aspect: "tall" },
  { title: "Composición nocturna", type: "Large scale · torso", alt: "Tatuaje de composición oscura y precisa", image: "/images/portfolio-06.svg", aspect: "portrait" },
];
