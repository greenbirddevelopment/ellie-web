import Link from "next/link";
import { Lato_700, Lato_900 } from "../layout";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Catalog = ({ catalog }) => {
  const conditionings = catalog.filter(
    (catalog) => catalog.category === "conditioning"
  );

  return (
    <section id="catalog">
      <section className="text-center">
        <h1
          className={`text-3xl lg:text-4xl drop-shadow mb-4 ${Lato_700.className}`}
        >
          Our catalog is designed entirely according to your needs!
        </h1>
        <p className="text-gray-400 text-lg mb-4">
          Download our catalog to examine it in full detail
        </p>
        <Link
          href={"https://ellie-web.s3.amazonaws.com/catolog/ellie_catalog.pdf"}
          download={"ellie_catalog"}
          target="_blank"
        >
          <Button
            type={"button"}
            variant={"gradient"}
            className={"group flex items-center mx-auto gap-3"}
          >
            <span>Download catalog</span>
            <FontAwesomeIcon
              icon={faDownload}
              className="text-secondary group-hover:text-primary"
            />
          </Button>
        </Link>
      </section>
      <section>
        <ul className="flex">
          {/* {conditionings.map((conditioning) => (
            <li>
              <Image src={conditioning[0].thumbnail} width={600} height={600} />
            </li>
          ))} */}
        </ul>
      </section>
    </section>
  );
};

export default Catalog;
