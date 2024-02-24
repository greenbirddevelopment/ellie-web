import Image from "next/image";
import { motion } from "framer-motion";
import { Lato_700 } from "../layout";

const Arge = ({ argeIcons }) => (
  <section id="arge" className="mb-32 pt-16">
    <section className="mb-20">
      <h1
        className={`text-3xl lg:text-4xl text-primary drop-shadow mb-4 ${Lato_700.className}`}
      >
        Arge: Developing A Smart Home System
      </h1>
      <p className="text-gray-400 text-justify mb-2">
        At Ellie Smart Home Systems, our ARGE (Applied Research and Development)
        department plays a crucial role in driving innovation and pushing the
        boundaries of smart home technology.
      </p>
      <p className="text-gray-400 text-justify mb-2">
        Through rigorous research and development efforts, we continuously
        explore new avenues to enhance the functionality, efficiency, and user
        experience of our smart home solutions. Our ARGE team collaborates
        closely with industry partners, academia, and experts in various fields
        to stay at the forefront of technological advancements.
      </p>
      <p className="text-gray-400 text-justify">
        By investing in ARGE, we ensure that our products and services remain at
        the cutting edge, offering our clients the most advanced and
        future-proof smart home solutions available. At Ellie, ARGE isn't just
        about keeping up with the latest trends—it's about shaping the future of
        smart living.
      </p>
    </section>
    <section>
      <ul>
        {argeIcons.map((argeICon, index) => (
          <motion.li
            style={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="flex items-start mb-24 last:mb-0 gap-6"
            key={argeICon.name}
          >
            <Image
              src={argeICon.source}
              width={argeICon.size.width}
              height={argeICon.size.height}
              alt={argeICon.title}
              className="w-full lg:w-auto"
            />
            <section>
              <h1 className={`text-xl lg:text-2xl mb-1 ${Lato_700.className}`}>
                {argeICon.description}
              </h1>
              <p className="text-gray-400 text-justify">{argeICon.paragraph}</p>
            </section>
          </motion.li>
        ))}
      </ul>
    </section>
  </section>
);

export default Arge;
