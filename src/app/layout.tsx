// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Technical Blog - Rafael de Farias Nascimento",
  description: "Technical Blog de Rafael de Farias Nascimento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + " bg-white text-gray-800"}>
        <div className="flex flex-col min-h-screen items-center px-4">
          <header className="w-full max-w-2xl py-6">
            <h1 className="text-2xl font-bold text-center">
              <a href="/">Technical Blog - Rafael de Farias Nascimento</a>
            </h1>
          </header>
          <main className="w-full max-w-2xl flex-1 prose prose-lg">
            {children}
          </main>
          <footer className="w-full max-w-2xl py-6 text-sm text-center text-gray-500 border-t mt-10">
            © {new Date().getFullYear()} - Rafael de Farias Nascimento. Todos os direitos reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}