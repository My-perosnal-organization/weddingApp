import { HeroSection } from "./components/HeroSection";
import { DateSection } from "./components/DateSection";
import { PlaylistSection } from "./components/PlaylistSection";
import { GiftsSection } from "./components/GiftsSection";
import { Footer } from "./components/Footer";
import { LocationsSection } from "./components/LocationsSection";
import { PartySection } from "./components/PartySection";
import { ProgramSection } from "./components/ProgramSection";

export default function App() {
  return (
    <div className="page">
      <HeroSection />
      <DateSection />
      <LocationsSection />
      <PartySection />
      <ProgramSection />
      <PlaylistSection />
      <GiftsSection />
      <Footer />
    </div>
  );
}
