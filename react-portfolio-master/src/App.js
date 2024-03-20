// import logo from './logo.svg';
import React from 'react';
import styles from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
   <Navbar />
   <Hero />
   <About />
   <Experience />
   <Projects />
   <Footer />
    </div>
  );
}

export default App;
