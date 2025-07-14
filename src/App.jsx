import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Component/Layout";
import Header from "./Component/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <Layout />
      </div>
    </>
  );
}

export default App;
