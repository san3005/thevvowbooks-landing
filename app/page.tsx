import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
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
        <Features />
        <Faq />
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
