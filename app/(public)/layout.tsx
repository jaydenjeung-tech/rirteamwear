import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { CartProvider } from "@/components/providers/CartProvider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <AuthProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </AuthProvider>
    </CartProvider>
  );
}
