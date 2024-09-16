import { useState } from "react";
import "./css/index.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Rating from "./components/Rating";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <main className="relative">
        <Navbar />

        <Layout>
          <Home />
        </Layout>

        <Layout>
          <About />
        </Layout>

        <Layout>
          <Rating />
        </Layout>

        <Layout>
          <Contact />
        </Layout>
      </main>
    </>
  );
}

export default App;
