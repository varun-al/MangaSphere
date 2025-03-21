import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendingSection from "../components/TrendingSection";
import LatestUpdatesSection from "../components/LatestUpdatesSection";
import FeaturedCollectionsSection from "../components/FeaturedCollectionsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen text-white bg-black">
        <Navbar />
        <HeroSection />
        <TrendingSection />
        <LatestUpdatesSection />
        <FeaturedCollectionsSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;