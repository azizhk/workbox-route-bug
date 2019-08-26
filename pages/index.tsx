import * as React from "react";
import RegisterSWButton from "../components/RegisterSWButton";

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <div>{`Build ID: ${process.env.NEXT_BUILD_ID}`}</div>
        <div>
          <RegisterSWButton />
        </div>
      </>
    );
  }
}
