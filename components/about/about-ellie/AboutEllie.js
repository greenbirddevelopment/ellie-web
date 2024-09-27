import { Lato_700 } from "@/components/layout";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutEllie = ({}) => {
  return (
    <section id="about-ellie" className="mb-32 pt-16">
      <section className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
          <motion.div
            style={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
          >
            {/* <Image
              src={watermarkIcon.source}
              width={watermarkIcon.size.width}
              height={watermarkIcon.size.height}
              className="w-11/12 lg:w-full mx-auto mb-24 lg:mb-0"
              alt={watermarkIcon.name}
            /> */}
            <Image src={"/smart_home.png"} width={960} height={843} />
          </motion.div>
          <section className="block lg:hidden">
            <ul className="grid grid-cols-12 gap-6">
              {/* {infoIcons.map((infoIcon, index) => (
                <motion.li
                  style={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`flex items-center col-span-6 gap-3`}
                  key={infoIcon.name}
                >
                  <Image
                    src={infoIcon.source}
                    width={infoIcon.size.width}
                    height={infoIcon.size.height}
                    className="lg:col-span-2 bg-linear-from drop-shadow-xl rounded p-3"
                    style={{ width: "48px", height: "48px" }}
                    alt={infoIcon.title}
                  />
                  <section>
                    <h1
                      className={`lg:text-lg text-start ${Lato_700.className}`}
                    >
                      {infoIcon.description}
                    </h1>
                  </section>
                </motion.li>
              ))} */}
            </ul>
          </section>
        </div>
        <div className="lg:grid lg:grid-cols-12 col-span-12 lg:col-span-8 order-1 lg:order-2 mb-20 lg:mb-0">
          <div className="col-span-4"></div>
          <div className="text-center lg:text-start col-span-8">
            <section className="mb-8">
              <h1
                className={`text-3xl lg:text-4xl drop-shadow mb-4 ${Lato_700.className}`}
              >
                Ellie is designed entirely with your needs in mind!
              </h1>
              <p className="text-gray-400 text-lg ms-auto">
                ELLIE is an application that brings together smart home
                products, transforming your home life under a single mobile app.
                Designed to simplify your life and bring control of your home to
                your fingertips.
              </p>
            </section>
            <section className="hidden lg:block">
              <ul className="grid grid-cols-12 gap-6">
                {/* {infoIcons.map((infoIcon, index) => (
                  <motion.li
                    style={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className={`flex items-center col-span-6 gap-3`}
                    key={infoIcon.name}
                  >
                    <Image
                      src={infoIcon.source}
                      width={infoIcon.size.width}
                      height={infoIcon.size.height}
                      className="lg:col-span-2 bg-linear-from drop-shadow-xl rounded p-3"
                      style={{ width: "48px", height: "48px" }}
                      alt={infoIcon.title}
                    />
                    <section>
                      <h1
                        className={`lg:text-lg text-start ${Lato_700.className}`}
                      >
                        {infoIcon.description}
                      </h1>
                    </section>
                  </motion.li>
                ))} */}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutEllie;
