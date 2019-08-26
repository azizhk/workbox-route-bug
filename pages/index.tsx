import * as React from "react";
import registerServiceWorker from "../utils/serviceWorkerRegistrar";
import { ShowSnackContext } from "../pages/_app";

const Index: React.FC = () => {
  const showSnack = React.useContext(ShowSnackContext);
  function onClick() {
    registerServiceWorker(showSnack);
  }
  return (
    <>
      <div>{`Build ID: ${process.env.NEXT_BUILD_ID}`}</div>

      <div
        onClick={onClick}
        style={{ textDecoration: "underline", cursor: "pointer" }}
      >
        Click me
      </div>
    </>
  );
};

export default Index;
