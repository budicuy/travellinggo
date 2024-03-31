import Banner from "./banner";
import Destination from "./Destination";
import Promo from "./Promo";
import Menu from "./Menu";
import Popular from "./Popular";
import Navbar from "./navbar";
import About from "./About";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <Menu />
        <Destination />
        <Promo />
        <Popular />
        <About />
        <Footer />
      </main>
    </div >
  );
}
