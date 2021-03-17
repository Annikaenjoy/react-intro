import React from "react";
import "./sass/style.scss"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";


function App() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <Header />
        <Paragraph />
        <Title />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
