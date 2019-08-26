import * as React from "react";
import registerServiceWorker from "../utils/serviceWorkerRegistrar";
import { ShowSnackContext } from "../pages/_app";

const Auto: React.FC = () => {
  const showSnack = React.useContext(ShowSnackContext);
  React.useEffect(() => {
    registerServiceWorker(showSnack);
  }, [showSnack]);
  return (
    <>
      <div>{`Build ID: ${process.env.NEXT_BUILD_ID}`}</div>

      <div>Here WB.register() is called at load time.</div>
    </>
  );
};

export default Auto;
