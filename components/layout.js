import Navbar from "./ui/Navbar";
import { Lato } from "next/font/google";
import { Exo_2 } from "next/font/google";
import Container from "./Container";
import Footer from "./ui/Footer";

export const Lato_400 = Lato({ subsets: ["latin"], weight: "400" });
export const Lato_700 = Lato({ subsets: ["latin"], weight: "700" });
export const Lato_900 = Lato({ subsets: ["latin"], weight: "900" });

export const Exo_2_500 = Exo_2({ subsets: ["latin"], weight: ["500"] });
export const Exo_2_700 = Exo_2({ subsets: ["latin"], weight: ["700"] });
export const Exo_2_900 = Exo_2({ subsets: ["latin"], weight: ["900"] });

export default function Layout({ children }) {
  return (
    <>
      <header className="sticky top-0 backdrop-blur shadow-sm lg:shadow-none py-3 z-10">
        <Navbar />
      </header>
      <main className={Lato_400.className}>{children}</main>
      <Container className={"my-32"}>
        <hr className="border border-gray-800" />
      </Container>
      <Footer />
    </>
  );
}
