import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARTIST_NAME — Noir & Needle",
  description: "Tatuador independiente especializado en proyectos de gran escala y diseños personalizados.",
};
export const viewport: Viewport = { themeColor: "#0A0A0A", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="es"><body>{children}</body></html>;
}
