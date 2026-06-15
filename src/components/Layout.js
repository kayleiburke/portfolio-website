import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout(props) {
  return (
    <div className="mi-wrapper">
      <Header />
      <main className="mi-main">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
