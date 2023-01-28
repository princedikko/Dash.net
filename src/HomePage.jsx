import React from "react";

import Header from "./component/Header";
import Main from "../src/component/Main";
import Footer from "./component/Footer";

function HomePage() {
  return (
    <section className="sectionHomePage">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default HomePage;
