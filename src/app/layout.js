import { Inter } from "next/font/google";
import "./css/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovSer",
  description: "Movies and Series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
