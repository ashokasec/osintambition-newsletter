import BestWork from "@/components/hero/best_work";
import Clients from "@/components/hero/clients";
import FAQ from "@/components/hero/faq";
import Footer from "@/components/common/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/common/navbar";
import Subscribe from "@/components/hero/subscribe";

export default function Home() {
  return (
    <>
      <div className="kshetra"></div>
      <div className="py-16 lg:py-24">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(38,91,248,0.25),rgba(255,255,255,0))]"></div>
        <Navbar />
        <Hero />
        <Clients />
        <BestWork />
        <FAQ />
        <Subscribe />
      </div>
      <Footer />
    </>
  )
}