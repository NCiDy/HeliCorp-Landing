import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Specifications from "@/components/sections/Specifications";
import Newsletter from "@/components/sections/Newsletter";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Chatbot from "@/components/commom/Chatbot";

export default function Home(){
  return(
    <>
    <Header />

    <main>
      <Hero />
      <Features />
      <Specifications />
      <Newsletter />
      <Chatbot/>
      <ScrollToTop />
    </main>

    <Footer />
    </>
  )
}