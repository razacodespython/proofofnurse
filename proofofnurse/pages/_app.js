import { ChakraProvider } from "@chakra-ui/provider";
import Navigation from "./components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
