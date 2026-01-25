import { HeroSection } from "./components/HeroSection";
import { DateSection } from "./components/DateSection";
import { PlaylistSection } from "./components/PlaylistSection";
import { GiftsSection } from "./components/GiftsSection";
import { Footer } from "./components/Footer";
import { LocationsSection } from "./components/LocationsSection";
import { PartySection } from "./components/PartySection";
import { ProgramSection } from "./components/ProgramSection";
import { PhotosCarouselSection } from "./components/PhotosCarouselSection";
import { BankAccountSection } from "./components/BankAccountSection";
import { DressCodeSection } from "./components/DressCodeSection";

export default function App() {
  return (
    <div className="page">
      <HeroSection />
      <DateSection />
      <LocationsSection />
      <PartySection />
      <PhotosCarouselSection />
      <DressCodeSection />
      <ProgramSection />
      <PlaylistSection />
      <BankAccountSection />
      <GiftsSection />
      <Footer />
    </div>
  );
}
