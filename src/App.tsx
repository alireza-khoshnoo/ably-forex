import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Footer = lazy(() => import("./components/Footer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Loading = lazy(() => import("./components/Loading"));
const About = lazy(() => import("./pages/About"));
const Articles = lazy(() => import("./pages/Articles"));
const News = lazy(() => import("./pages/News"));
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#contact") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={[
            <Navbar key="navbar" />,
            <Home key="home" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/about"
          element={[
            <Navbar key="navbar" />,
            <About key="about" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/about#contact"
          element={[
            <Navbar key="navbar" />,
            <About key="about" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/articles"
          element={[<Navbar key="navbar" />, <Articles key="articles" />]}
        />
        <Route
          path="/news"
          element={[<Navbar key="navbar" />, <News key="news" />]}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
