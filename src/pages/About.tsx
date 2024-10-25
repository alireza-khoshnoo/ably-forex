import Contact from "../components/about/Contact";
import Mission from "../components/about/Mission";
import Roadmap from "../components/about/roadmap/Roadmap";
import Team from "../components/about/team/Team";
import Breadcrumb from "../components/Breadcrumb";
import { useEffect, useRef } from "react";
import useStore from "../stores/useStore";

export default function About() {
  const contactRef = useRef<HTMLDivElement>(null);
  const booleanState = useStore((state) => state.booleanState);

  useEffect(() => {
    scrollToSpot();
  }, [booleanState]);

  const scrollToSpot = () => {
    const hash = window.location.hash;
    if (hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="text-darktext dark:text-lighttext px-10 md:px-20 my-10">
        <Breadcrumb links={[{ pathName: "about", path: "/about" }]} />
        <Mission />
        <Roadmap />
        <Team />
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}
