import React from "react";
import Body from "./pages/BodyContent";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Tweets from "./pages/Tweets";

import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Tweets />
      <Body />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
