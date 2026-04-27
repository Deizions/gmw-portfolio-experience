import { useLenis } from "../hooks/useLenis";
import { useGsapAnimations } from "../hooks/useGsapAnimations";

import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import CustomCursor from "../components/layout/CustomCursor";

import HeroSection from "../components/sections/HeroSection";
import ManifestoSection from "../components/sections/ManifestoSection";
import StorySection from "../components/sections/StorySection";
import WorkSection from "../components/sections/WorkSection";
import MotionSection from "../components/sections/MotionSection";
import ThinkingSection from "../components/sections/ThinkingSection";
import FinalCtaSection from "../components/sections/FinalCtaSection";

export default function App() {
  useLenis();
  useGsapAnimations();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <CustomCursor />
      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <ManifestoSection />
        <StorySection />
        <WorkSection />
        <MotionSection />
        <ThinkingSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}