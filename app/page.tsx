import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { Features } from '@/components/sections/Features';
import { Faq } from '@/components/sections/Faq';
import { CtaFooter } from '@/components/sections/CtaFooter';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <Faq />
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
