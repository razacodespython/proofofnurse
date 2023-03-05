import { ChakraProvider } from "@chakra-ui/provider";
import Navigation from "./components/nav";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { SSXProvider } from "@spruceid/ssx-react";
import { SSXNextAuthRouteConfig } from "@spruceid/ssx-react/next-auth/frontend";
import { SessionProvider } from "next-auth/react";

if (!process.env.NEXT_PUBLIC_ALCHEMY_API_KEY) {
  console.error(
    "Missing NEXT_PUBLIC_ALCHEMY_API_KEY environment variable. Add to .env.local"
  );
}

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const { server } = SSXNextAuthRouteConfig({
  signInOptions: { callbackUrl: "/signup" },
});
const ssxConfig = {
  siweConfig: {
    domain: "localhost:3000",
  },
  providers: {
    server,
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <SSXProvider ssxConfig={ssxConfig}>
          <SessionProvider session={pageProps.session} refetchInterval={0}>
            <ChakraProvider>
              <Navigation />
              <Component {...pageProps} />
            </ChakraProvider>
          </SessionProvider>
        </SSXProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
