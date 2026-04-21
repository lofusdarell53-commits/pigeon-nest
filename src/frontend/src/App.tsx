import { Layout } from "@/components/Layout";
import { CommunitySection } from "@/pages/CommunitySection";
import { DexChartSection } from "@/pages/DexChartSection";
import { FaqsSection } from "@/pages/FaqsSection";
import { GallerySection } from "@/pages/GallerySection";
import { HeroSection } from "@/pages/HeroSection";
import { HowToBuySection } from "@/pages/HowToBuySection";
import { LoreSection } from "@/pages/LoreSection";
import { TokenomicsSection } from "@/pages/TokenomicsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <LoreSection />
      <TokenomicsSection />
      <DexChartSection />
      <HowToBuySection />
      <GallerySection />
      <CommunitySection />
      <FaqsSection />
    </Layout>
  );
}
