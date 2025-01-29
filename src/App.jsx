import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import MainBanner from "./MainBanner";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <MainBanner />
      <Footer />
    </>
  );
}

export default App;
