import { Meta, Links } from "@remix-run/react";
import styles from "./styles/index.css";

export function meta() {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: "GuitarLA - Remix",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  return (
    <Document>
      <h1>Hola desde App</h1>
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>

      <body>{children}</body>
    </html>
  );
}
