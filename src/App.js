import React from "react";
import "./sass/style.scss";
import Footer from "./components/Footer";
import Table from "./components/Table";

function App() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <Table />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
