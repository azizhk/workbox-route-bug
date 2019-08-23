import * as React from "react";
import Link from "next/link";
import registerServiceWorker from "../utils/serviceWorkerRegistrar";
import { ShowSnackContext } from "./_app";

const Page: React.FC = () => {
  const showSnack = React.useContext(ShowSnackContext);
  React.useEffect(() => {
    registerServiceWorker(showSnack);
  }, [showSnack]); // This should be [] but eslint rule will throw error and because showSnack does not change, it will only be triggered once.
  return (
    <>
      <h2>This is /a</h2>
      <div>Service Worker is initialized here.</div>
      <div>{`Build ID: ${process.env.NEXT_BUILD_ID}`}</div>
      <div>
        <Link href="/">
          <a>Go to index</a>
        </Link>
      </div>
    </>
  );
};

export default Page;
