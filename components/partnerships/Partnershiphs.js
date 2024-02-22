import { motion } from "framer-motion";
import Image from "next/image";
import { Lato_700 } from "../layout";

const Partnerships = ({ partnerships }) => {
  return (
    <section id="partnerships" className="pt-16">
      <section className="mb-12">
        <h1
          className={`text-3xl lg:text-4xl text-primary text-center drop-shadow mb-12 ${Lato_700.className}`}
        >
          PARTNERSHIPS & SPONSORS
        </h1>
        <p className="text-gray-400 text-center text-lg lg:text-xl">
          We pride ourselves on fostering meaningful partnerships and
          collaborations with industry-leading organizations to further enhance
          the capabilities of our system.
        </p>
      </section>
      <section className="flex flex-wrap justify-center gap-12 lg:gap-6">
        {partnerships.map((partnership) => (
          <Image
            src={partnership.logo.source}
            width={partnership.logo.size.width}
            height={partnership.logo.size.height}
            className="w-24 lg:w-32 object-contain drop-shadow-2xl"
            alt={partnership.name}
            key={partnership.name}
          />
        ))}
      </section>
    </section>
  );
};

export default Partnerships;
