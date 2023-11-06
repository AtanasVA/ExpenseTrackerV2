import { type AppType } from "next/app";
import { Providers } from "./_providers";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

export default api.withTRPC(MyApp);
