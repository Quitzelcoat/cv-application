// import { useState } from "react";
import "./App.css";
import ShowCv from "./components/ShowCv";
import CvDetail from "./components/CvDetail";

function App() {
  return (
    <>
      <section className="cvDetail">
        <CvDetail />
      </section>
      <section className="showCv">
        <ShowCv />
      </section>
    </>
  );
}

export default App;
