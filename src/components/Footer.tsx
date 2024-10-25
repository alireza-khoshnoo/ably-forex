import { Link } from "react-router-dom";
import Socials from "./Socials";
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <div className="text-darktext dark:text-lighttext">
      <div className="px-10 md:px-20 py-6 grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="my-10 flex flex-col items-center md:items-start">
          <div className="flex items-center">
            <Link to="/" aria-label="back to hamepage">
              <img
                className="w-14 mr-3"
                src={logo}
                alt=""
              />
            </Link>
            <span className="text-3xl font-bold">ABLY Forex</span>
          </div>
          <p className="md:pr-10 text-justify mt-3 leading-10">
            Lorem ipsum dolor sit consectetur adipisicing elit. Exercitationem
            nam blanditiis natus distinctio veritatis odit. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Aliquid hic saepe est et,
            assumenda corrupti.
          </p>
        </div>

        <div className="footer-links flex gap-5 justify-between md:mx-20 text-center">
          <div className="flex flex-col gap-2">
            <span className="font-bold mb-3">Quick Links</span>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/"}>Teams</Link>
            <Link to={"/"}>Services</Link>
            <Link to={"/"}>Features</Link>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="font-bold mb-3">Quick Links</span>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/"}>Teams</Link>
            <Link to={"/"}>Services</Link>
            <Link to={"/"}>Features</Link>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="font-bold mb-3">Quick Links</span>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/"}>Teams</Link>
            <Link to={"/"}>Services</Link>
            <Link to={"/"}>Features</Link>
          </div>
        </div>
      </div>
      <div className="mx-10 md:mx-20 border-t border-white/30"></div>
      <div className=" px-10 md:px-20 py-5 flex flex-col md:flex-row gap-3 items-center justify-between ">
        <span className=" font-bold text-black/70 dark:text-white/70">
          &copy; 2024 All Rights Reserved By ABLY
        </span>
        <Socials />
      </div>
    </div>
  );
}
