import { Lato_700 } from "../layout";

const AboutUs = () => (
  <section id="about-us" className="mb-32 pt-16">
    <section className="mb-12">
      <h1
        className={`text-3xl lg:text-4xl text-primary drop-shadow mb-4 ${Lato_700.className}`}
      >
        Our mission
      </h1>
      <p className="text-justify">
        At Ellie Smart Home Systems, our mission is to empower individuals and
        businesses to create intelligent, efficient, and secure living and
        working environments through innovative smart home solutions. We strive
        to leverage cutting-edge technologies such as artificial intelligence,
        IoT connectivity, and advanced automation to simplify everyday tasks,
        enhance comfort, and optimize resource usage. By delivering intuitive
        and customizable smart home systems tailored to the unique needs of our
        clients, we aim to enhance their quality of life while promoting
        sustainability and convenience.
      </p>
    </section>
    <section>
      <h1
        className={`text-3xl lg:text-4xl text-primary drop-shadow mb-4 ${Lato_700.className}`}
      >
        Our Vission
      </h1>
      <p className="text-justify">
        Our vision at Ellie Smart Home Systems is to be the leading provider of
        next-generation smart home solutions, setting the standard for
        excellence and innovation in the industry. We envision a future where
        smart homes seamlessly integrate with our daily lives, anticipating and
        adapting to our needs with precision and intelligence. Through
        continuous research, development, and collaboration, we aspire to push
        the boundaries of what's possible, delivering groundbreaking
        technologies and experiences that redefine the way we live and interact
        with our environments. Ultimately, we envision a world where every home
        is a smart home, enhancing convenience, comfort, and efficiency for all.
      </p>
    </section>
  </section>
);

export default AboutUs;
