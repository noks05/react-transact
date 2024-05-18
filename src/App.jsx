import "./css/App.css";
import Articles from "./components/Articles/Articles.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Info from "./components/Info/Info.jsx";
import Button from "./ui/Button.jsx";
import MobileBottom from "./components/MobileBottom/MobileBottom.jsx";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    let start = 500;
    let finish = 2000;

    function activeElem(start,finish){
      {
        const mobileFooter = document.querySelector(".mobile-footer");
        const check =
        Number(window.scrollY) > start &&
        Number(window.scrollY) < finish;
        mobileFooter.classList.toggle("active", check);
      }
    }
    if (window.innerWidth <= 904) {
      start = 500;
      finish = 2000;

      if (window.innerWidth <= 599) {
        start = 200;
        finish = 910;
      }

      window.addEventListener("scroll", () => activeElem(start,finish));
    }

    return ()=>{
      window.removeEventListener('scroll',() => activeElem(start,finish))
    }
  },[])
  return (
    <>
      <div className="site-container">
        <Header />

        <div className="content">
         <div className="container">
            <Hero />
            <Info />
            <Articles />
            <Button text="Unlock the full potential" />
         </div>
        </div>

        <Footer />
      </div>
      <MobileBottom />
    </>
  );
}

export default App;
