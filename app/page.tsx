import AboutSection from '@/components/UI/AboutSection/AboutSection';
import HomeGrid from '@/components/Pages/Home/HomeGrid/HomeGrid';
import CategoryLinksSection from '@/components/UI/CategoryLinksSection/CategoryLinksSection';
import Header from '@/components/Layout/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <CategoryLinksSection />
      <HomeGrid />
      <AboutSection />
    </>
  );
}
