import ItemCards from "@/components/cards/ItemCards";
import HeroSection from "@/components/hero/HeroSection";


export default function Home() {
  return (
    <div className="w-full md:max-w-6xl md:mx-auto px-8">
      <HeroSection />
      <ItemCards />
    </div>
  );
}
