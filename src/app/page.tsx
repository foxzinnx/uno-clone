import { Benefits } from "@/components/ui/benefits";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Products } from "@/components/ui/products";

export default function Home() {
  return (
    <div className="px-4">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <Footer />
    </div>
  );
}
