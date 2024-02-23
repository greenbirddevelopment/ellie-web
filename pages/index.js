import Container from "@/components/Container";
import AboutEllie from "@/components/about/about-ellie/AboutEllie";
import Arge from "@/components/arge/Arge";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Partnerships from "@/components/partnerships/Partnershiphs";
import Products from "@/components/products/Products";
import BackgroundVideo from "@/components/ui/BackgroundVideo/BackgroundVideo";

export default function Home({ icons, videos, partnerships }) {
  console.log(icons);

  const headerIcon = icons.filter((icon) => icon.type === "header").at(0);
  const productIcons = icons.filter((icon) => icon.type === "product");
  const watermarkIcon = icons.filter((icon) => icon.type === "watermark").at(0);
  const infoIcons = icons.filter((icon) => icon.type === "info");

  const backgroundVideo = videos
    .filter((video) => video.name === "background")
    .at(0);

  return (
    <>
      <header className="lg:mb-64">
        <BackgroundVideo backgroundVideo={backgroundVideo} />
        <Container>
          <Jumbotron headerIcon={headerIcon} />
        </Container>
      </header>
      <Container>
        <AboutEllie watermarkIcon={watermarkIcon} infoIcons={infoIcons} />
        <Products productIcons={productIcons} />
        <Arge />
        <Partnerships partnerships={partnerships} />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const responseIcon = await fetch(
    "https://ellie-web-api-dev.elliesupport.com/api/icons"
  );

  const responseVideo = await fetch(
    "https://ellie-web-api-dev.elliesupport.com/api/videos"
  );

  const responsePartnership = await fetch(
    "https://ellie-web-api-dev.elliesupport.com/api/partnerships/"
  );

  // const responseCatalog = await fetch("https://ellie-web-api-dev.elliesupport.com/api/catalog");

  const iconsData = await responseIcon.json();
  const videosData = await responseVideo.json();
  const partnershipsData = await responsePartnership.json();
  // const catalogData = await responseCatalog.json();

  return {
    props: {
      icons: iconsData.data.icons,
      videos: videosData.data.videos,
      partnerships: partnershipsData.data.partnerships,
      // catalog: catalogData.data.catalog,
    },
  };
}
