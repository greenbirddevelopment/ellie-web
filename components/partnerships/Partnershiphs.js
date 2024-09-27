import { motion } from "framer-motion";
import Image from "next/image";
import { Lato_700 } from "../layout";

const Partnerships = ({}) => {
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
        {/* {partnerships.map((partnership) => (
          <Image
            src={partnership.logo.source}
            width={partnership.logo.size.width}
            height={partnership.logo.size.height}
            className="w-24 lg:w-32 object-contain drop-shadow-2xl"
            alt={partnership.name}
            key={partnership.name}
          />
        ))} */}
        <Image
          src={"/partnerships/google_nest_logo.png"}
          width={344}
          height={120}
          className="w-24 lg:w-32"
        />
        <Image
          src={"/partnerships/tado_logo.png"}
          width={416}
          height={120}
          className="w-24 lg:w-32"
        />
        <Image
          src={"/partnerships/yale_logo.png"}
          width={344}
          height={120}
          className="w-24 lg:w-32"
        />
        <Image
          src={"/partnerships/igloohome_logo.png"}
          width={303}
          height={120}
          className="w-24 lg:w-32"
        />
        <Image
          src={"/partnerships/nuki_logo.png"}
          width={344}
          height={120}
          className="w-24 lg:w-32"
        />
        <Image
          src={"/partnerships/sensibo_logo.png"}
          width={269}
          height={120}
          className="w-24 lg:w-32"
        />
        <Image
          src={"/partnerships/ecobee_logo.png"}
          width={441}
          height={120}
          className="w-24 lg:w-32"
        />
        <Image
          src={"/partnerships/sonoff_logo.png"}
          width={406}
          height={120}
          className="w-24 lg:w-32"
        />
      </section>
    </section>
  );
};

export default Partnerships;
