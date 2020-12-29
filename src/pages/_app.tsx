import React from "react";

import { SideBar } from "../components/SideBar";
import "../../styles/styles.css";
import SplitPane from "react-split-pane";

function MyApp({ Component, pageProps }) {
  return (
    <SplitPane split="vertical" minSize={"20em"}>
      <SideBar />
      <Component {...pageProps} />
    </SplitPane>
  );
}

export default MyApp;
