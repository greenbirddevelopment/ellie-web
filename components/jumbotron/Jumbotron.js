import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Lato_900 } from "../layout";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Jumbotron = ({ headerIcon }) => {
  const { scrollYProgress } = useScroll();

  let scale, opacity;

  if (scrollYProgress) {
    scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
    opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  }

  return (
    <section className="lg:grid lg:grid-cols-12 overflow-x-hidden overflow-y-clip mt-12 lg:mt-24">
      <div className="col-span-12 lg:col-span-7 mb-12 lg:mb-0">
        <h1
          className={`text-primary text-center text-xs lg:text-lg lg:text-start mb-2 lg:mb-0 drop-shadow-2xl ${Lato_900.className}`}
          style={{ letterSpacing: 5 }}
        >
          MANAGE YOUR SMART HOME
        </h1>
        <h1
          className={`text-5xl text-center lg:text-start lg:text-8xl mb-4 lg:mb-8 uppercase drop-shadow-2xl ${Lato_900.className}`}
        >
          Build Your Smart Home Perfect
        </h1>
        <p className="text-gray-400 text-xl lg:w-3/4 text-center lg:text-start drop-shadow-2xl mb-8 lg:mb-16">
          Transforming houses into smart spaces with&nbsp;
          <strong className="text-white">Ellie Smart Home Assistant.</strong>
          &nbsp; Your home, <strong>smarter</strong> than ever before!
        </p>
        <ul className="lg:flex lg:items-center gap-6">
          <li className="mb-4 lg:mb-0">
            <Link href={"#products"}>
              <Button
                type={"button"}
                variant={"primary"}
                className={
                  "flex items-center justify-between gap-2 mx-auto lg:mx-0"
                }
              >
                <span>See smart products</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"#about-ellie"}>
              <Button
                type={"button"}
                variant={"link"}
                className={
                  "flex items-center justify-between gap-2 mx-auto lg:mx-0 !text-white hover:!text-primary"
                }
              >
                <span>Explore Ellie</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </Button>
            </Link>
          </li>
        </ul>
        {/* <p className="text-gray-400 text-lg lg:w-3/4 text-center lg:text-start">
            Effortlessly manage your home's lighting, climate, security,
            entertainment, and more, all from the palm of your hand.
          </p>
          <p className="text-gray-400 text-lg lg:w-3/4 text-center lg:text-start">
            Where innovation meets latest technology: elevating your home
            experience more smarter.
          </p> */}
      </div>
      <motion.div
        animate={
          typeof window !== "undefined" && window.innerWidth >= 768
            ? { x: [100, 0], opacity: [0, 1] }
            : { y: [100, 0], opacity: [0, 1] }
        }
        exit={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="col-span-12 lg:col-span-5"
        style={
          typeof window !== "undefined" ? { scale, opacity } : { opacity: 0 }
        }
      >
        <Image
          src={headerIcon.source}
          width={headerIcon.size.width}
          height={headerIcon.size.height}
          className="w-full mx-auto"
          alt={headerIcon.title}
          priority
        />
      </motion.div>
    </section>
  );
};

export default Jumbotron;
