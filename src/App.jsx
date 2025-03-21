import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <AboutMe />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
