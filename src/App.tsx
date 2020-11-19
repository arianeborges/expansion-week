import React from "react";
import Body from "./pages/BodyContent";
import Header from "./pages/Header";

import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Body />
      <GlobalStyle />
    </>
  );
};

export default App;
