import Image from "next/image";
// import Featured from "./components/Featured";
import Offer from "./components/Offer";
import Slider from "./components/Slider";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
      <Footer />
    </main>
  );
}
