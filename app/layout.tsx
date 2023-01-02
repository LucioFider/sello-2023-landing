import { Container } from "../components/container";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>
          <Header />
          <main className="overflow-hidden page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
