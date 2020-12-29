import React from "react";

import { Sidebar } from "../components/Sidebar";
import "../../styles/styles.css";
import SplitPane from "react-split-pane";

function MyApp({ Component, pageProps }) {
  return (
    <SplitPane split="vertical" minSize={"16em"}>
      <Sidebar />
      <Component {...pageProps} />
    </SplitPane>
  );
}

export default MyApp;
