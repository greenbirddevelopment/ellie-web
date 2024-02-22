import Link from "next/link";
import { Exo_2_700 } from "../layout";

const Brand = () => (
  <Link
    href={"/"}
    className={`text-3xl lg:text-4xl drop-shadow-2xl ${Exo_2_700.className}`}
  >
    ELLIE
  </Link>
);

export default Brand;
