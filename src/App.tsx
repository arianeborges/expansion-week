import React from "react";
import Body from "./pages/BodyContent";
import Header from "./pages/Header";
import Tweets from "./pages/Landing";

import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Tweets />
      <Body />
      <GlobalStyle />
    </>
  );
};

export default App;
