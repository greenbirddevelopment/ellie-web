import Image from "next/image";
import { Lato_700, Lato_900 } from "../layout";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";

const Products = ({}) => (
  <section id="products" className="mb-32 pt-16">
    <section className="mb-20">
      <h1
        className={`text-3xl lg:text-4xl text-primary drop-shadow mb-4 ${Lato_700.className}`}
      >
        Smart Products
      </h1>
      <p className="text-gray-400">
        Our range of smart products is designed to seamlessly integrate into
        your home, enhancing comfort, security, and efficiency. From smart
        devices that allow you to remote air conditioner control to smart
        lighting systems that adapt to your preferences, our products offer
        unparalleled control at your fingertips.
      </p>
    </section>
    <section className="mb-20">
      <ul className="grid grid-cols-12 gap-6">
        {/* {productIcons.map((productIcon, index) => (
          <motion.li
            style={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: index * 0.1,
            }}
            // viewport={{ once: true }}
            className={`flex col-span-6 gap-3 mb-6 last:mb-0`}
            key={productIcon.name}
          >
            <Image
              src={productIcon.source}
              width={productIcon.size.width}
              height={productIcon.size.height}
              className="lg:col-span-2 bg-linear-from drop-shadow-xl rounded p-3"
              style={{ width: "56px", height: "56px" }}
              alt={productIcon.title}
            />
            <section>
              <h1 className={`text-xl lg:text-2xl ${Lato_700.className}`}>
                {productIcon.description}
              </h1>
              <div className="hidden lg:block w-3/4">
                <p className="text-gray-300">{productIcon.paragraph}</p>
              </div>
            </section>
          </motion.li>
        ))} */}
      </ul>
    </section>
    <section className="text-gray-400 mb-14">
      <motion.p
        style={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          // delay: productIcons.length * 0.2,
        }}
      >
        <strong>With Ellie Smart Home</strong>, enjoy the peace of mind that
        comes with knowing your home is in sync with your lifestyle,
        effortlessly blending cutting-edge technology with everyday living.
        Experience the future of home automation with{" "}
        <strong>Ellie Smart Home</strong>.
      </motion.p>
    </section>
    {/* <section className="text-center">
      <Link href={"#catalog"}>
        <Button type={"button"} variant={"gradient"}>
          See more in the catalog
        </Button>
      </Link>
    </section> */}
  </section>
);

export default Products;
