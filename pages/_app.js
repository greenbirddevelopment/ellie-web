import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";
import Layout from "../components/layout";

const queryClient = new QueryClient();
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Ellie Smart Home Assistant | Welcome to Ellie, where your home comes to life! Our smart home assistant is more than just a device; it's the heartbeat of your connected home. Ellie seamlessly integrates with your daily routine, making life simpler, safer, and smarter. From managing your lights to optimizing energy usage, Ellie is your trusted companion, turning your house into a home of the future. Embrace the intElliegence of Ellie and experience a new era of convenience and comfort. Your home, reimagined with Ellie, the heartbeat of innovation. "
        />
        <meta
          name="keywords"
          // content="Ellie, ellie, ellie smart home, ellie smart home assistant, smart hue, smart light, hue, philips, sensibo"
          content="smart home, smart home systems, smart home assistant, ellie smart home, ellie smart home systems, ellie smart home assistant, ellie, smart devices"
        />
        <title>Ellie Smart Home Assistant | Manage your Home</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
