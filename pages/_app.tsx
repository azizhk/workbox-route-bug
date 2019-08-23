import * as React from "react";
import NextApp from "next/app";
import MaterialSnackbar, { SnackbarProps } from "../components/SnackBar";

interface State {
  snackbarProps: SnackbarProps;
}

type ShowSnack = (snackbarProps: SnackbarProps) => void;
export const ShowSnackContext = React.createContext<ShowSnack>(_ => {});

export default class App extends NextApp<{}, State> {
  state: Readonly<State> = {
    snackbarProps: {
      open: false
    }
  };

  showSnack: ShowSnack = (snackbarProps: SnackbarProps) => {
    this.setState({ snackbarProps });
  };

  render() {
    const { snackbarProps } = this.state;
    return (
      <>
        <ShowSnackContext.Provider value={this.showSnack}>
          {super.render()}
        </ShowSnackContext.Provider>
        <MaterialSnackbar {...snackbarProps} />
      </>
    );
  }
}
