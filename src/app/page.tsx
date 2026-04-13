import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";
import { BrandsSection } from "@/components/BrandsSection";
import { InfoBanners } from "@/components/InfoBanners";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <InfoBanners />
      <BrandsSection />
    </div>
  );
}
