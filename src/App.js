// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import { Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
// import Main from "./components/Main";

import SearchingError from "./components/SearchingError";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

import TopFooter from "./components/TopFooter";
import Footer from "./components/Footer";
import HomeHeader from "./components/HomeHeader";
import AboutHeader from "./components/AboutHeader";


function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(initialCount => initialCount + 1);

    console.log(count)
  }

  return (
    <>
      <Navbar incrementCount={() => incrementCount()} count={count}/>

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HomeHeader />
              <HomePage />
            </>
          }
        />
        <Route 
          path="/about" 
          element={
            <>
              <AboutHeader />
              <About />
            </>
          }
        />
        <Route 
          path="/blog" 
          element={
            <>
              <Blog />
            </>
          }
        />
        <Route 
          path="/blog/:id" 
          element={
            <>
              <BlogPost />
            </>
          }
        />
        <Route 
          path="/*" 
          element={
            <>
              <SearchingError />
            </>
          }
        />
      </Routes>

      {/* <Main /> */}
      <TopFooter />
      <Footer />
    </>
  );
}

export default App;
