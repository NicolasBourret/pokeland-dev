import { UserProvider } from "@auth0/nextjs-auth0";
import { TierProvider } from "../contexts/tierContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <TierProvider>
        <Component {...pageProps} />;
      </TierProvider>
    </UserProvider>
  );
}

export default MyApp;
