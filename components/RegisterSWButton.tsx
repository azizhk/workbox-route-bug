import * as React from "react";
import registerServiceWorker from "../utils/serviceWorkerRegistrar";
import { ShowSnackContext } from "../pages/_app";

const RegisterSWButton: React.FC = () => {
  const showSnack = React.useContext(ShowSnackContext);
  function onClick() {
    registerServiceWorker(showSnack);
  }
  return (
    <div
      onClick={onClick}
      style={{ textDecoration: "underline", cursor: "pointer" }}
    >
      Click me
    </div>
  );
};

export default RegisterSWButton;
