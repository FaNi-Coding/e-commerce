import AboutSection from '@/components/UI/AboutSection/AboutSection'
import HomeGrid from '@/components/Pages/Home/HomeGrid/HomeGrid'
import CategoryLinksSection from '@/components/UI/CategoryLinksSection/CategoryLinksSection'

export default function Home() {
  return (
    <>
      <CategoryLinksSection />
      <HomeGrid />
      <AboutSection />
    </>
  )
}
