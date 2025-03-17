import Container from "@/components/Container";
import Faq from "@/components/homepage/Faq";
import Features from "@/components/homepage/Features";
import FinalCta from "@/components/homepage/FinalCta";
import Hero from "@/components/homepage/Hero";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
      <Testimonials />
      <Faq />
      <FinalCta />
    </Container>
  );
}
