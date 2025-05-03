import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NerdiumLabs 3D - Plano Estratégico",
  description: "Plano estratégico completo para impulsionar a NerdiumLabs 3D e atingir R$5.000 de lucro mensal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-nerdium-purple text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-nerdium-copper rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">N3D</span>
              </div>
              <h1 className="text-xl font-bold">NerdiumLabs 3D</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-nerdium-copper transition-colors">Início</a></li>
                <li><a href="/produtos" className="hover:text-nerdium-copper transition-colors">Produtos</a></li>
                <li><a href="/tiktok" className="hover:text-nerdium-copper transition-colors">TikTok</a></li>
                <li><a href="/logistica" className="hover:text-nerdium-copper transition-colors">Logística</a></li>
                <li><a href="/financeiro" className="hover:text-nerdium-copper transition-colors">Financeiro</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-nerdium-copper font-bold text-lg mb-4">NerdiumLabs 3D</h3>
                <p className="text-gray-300">Forjamos paixões. Materializamos sonhos.</p>
                <p className="text-gray-300 mt-2">Transformando o imaginário em realidade física através da impressão 3D.</p>
              </div>
              <div>
                <h3 className="text-nerdium-copper font-bold text-lg mb-4">Contato</h3>
                <p className="text-gray-300">Site: www.nerdiumlabs3d.com.br</p>
                <p className="text-gray-300">Instagram: @nerdiumlabs3d</p>
                <p className="text-gray-300">WhatsApp: (86) 98819-7820</p>
              </div>
              <div>
                <h3 className="text-nerdium-copper font-bold text-lg mb-4">Plano Estratégico</h3>
                <p className="text-gray-300">Este site contém o plano estratégico completo para impulsionar a NerdiumLabs 3D e atingir R$5.000 de lucro mensal até o final de 2025.</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} NerdiumLabs 3D. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
