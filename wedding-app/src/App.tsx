import { HeroSection } from "./components/HeroSection";
import { DateSection } from "./components/DateSection";
import { LocationsSection } from "./components/LocationsSection";
import { PlaylistSection } from "./components/PlaylistSection";
import { GiftsSection } from "./components/GiftsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <HeroSection />
      <DateSection />
      <LocationsSection />
      <PlaylistSection />
      <GiftsSection />
      <Footer />
    </div>
  );
}
