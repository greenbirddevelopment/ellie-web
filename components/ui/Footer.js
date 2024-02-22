import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../Container";
import Brand from "./Brand";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Lato_700 } from "../layout";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="mb-12">
      <Container>
        <div className="lg:grid lg:grid-cols-12">
          <div className="col-span-6 text-center lg:text-start mb-12 lg:mb-0">
            <section className="mb-4">
              <Brand />
              <h1>Smart Home Systems © {new Date().getFullYear()}</h1>
            </section>
            <section className="flex items-center justify-center lg:justify-start gap-3">
              <Link
                href={"https://instagram.com/elliesmarthome"}
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
              <Link
                href={"https://linkedin.com/company/ellie-smart-home-systems"}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </section>
          </div>
          <div className="col-span-6 text-center lg:text-end">
            <section className="mb-4">
              <h1 className={`text-2xl ${Lato_700.className}`}>
                CYPRUS, KYRENIA
              </h1>
              <p className="text-gray-400">ŞHT FEVAIT ALI SK. NO 7</p>
            </section>
            <section>
              <h1 className={`text-lg ${Lato_700.className}`}>
                Contact us now!
              </h1>
              <Link
                href={"mailto:elliesmartsystem@gmail.com"}
                target="_blank"
                className="text-blue-400 underline"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ms-2">elliesmartsystem@gmail.com</span>
              </Link>
            </section>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
