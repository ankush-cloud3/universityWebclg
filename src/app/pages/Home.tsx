import { HeroSection } from "../components/home/HeroSection";
import { AIChatSection } from "../components/home/AIChatSection";
import { CampusCarousel } from "../components/home/CampusCarousel";
import { CampusMap } from "../components/home/CampusMap";
import { QuickAccessCards } from "../components/home/QuickAccessCards";
import { EventsTimeline } from "../components/home/EventsTimeline";
import { AchieversCarousel } from "../components/home/AchieversCarousel";
import { TestimonialsCarousel } from "../components/home/TestimonialsCarousel";

export function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <AIChatSection />
      <CampusCarousel />
      <CampusMap />
      <QuickAccessCards />
      <EventsTimeline />
      <AchieversCarousel />
      <TestimonialsCarousel />
    </div>
  );
}
