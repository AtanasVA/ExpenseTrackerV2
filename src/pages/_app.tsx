import { type AppType } from "next/app";
import { Providers } from "./_providers";

import { api } from "~/utils/api";

import "~/styles/global.styles.css";
import "~/styles/expenseItem.styles.css";
import "~/styles/expenseItemDate.styles.css";
import "~/styles/monthlyFilterChart.styles.css";
import "~/styles/dropzone.styles.css";

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
