import Blog from "./blog";
import Feature from "./feature";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Newsletter from "./newsletter";
import Pricing from "./pricing";
import Stats from "./stats";
import Testimony from "./testimony";

export default function MainIndex() {
  return (
    <main>
      <Header />
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Feature />
        <Stats />
        <Testimony />
        <Blog />
        <Pricing />
        <Newsletter />
      </section>
      <Footer />
    </main>
  );
}
