import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Button from "./Button";
import useStore from "../stores/useStore";
import logo from '../assets/images/logo.png'
// import icons
import { IoIosLogOut, IoMdMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { RiArticleLine } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { HiOutlineIdentification } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
// import icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const toggleBooleanState = useStore((state) => state.toggleBooleanState);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={
          "backdrop-blur-md p-5 px-7 md:px-20 sticky z-50 top-0 w-full h-20 text-lg flex items-center justify-between  bg-lightnav dark:bg-darknav text-darktext dark:text-lighttext transition-all"
        }
      >
        <Link className="left flex items-center gap-3" to="/">
          <img src={logo} className="w-10" alt="logo" />
          <h3 className=" font-medium">ABLY Forex</h3>
        </Link>
        <div className="center hidden md:flex gap-5">
          <Link to={"/about"}>About us</Link>
          <Link to={"/articles"}>Articles</Link>
          <Link to={"/news"}>News</Link>
          <Link onClick={toggleBooleanState} to={"/about#contact"}>
            Contact us
          </Link>
        </div>
        <div className="right">
          {/* for small screens */}
          <div className="burger md:hidden">
            <IoMdMenu
              onClick={() => setIsMenuOpen(true)}
              className="text-xl cursor-pointer"
            />
            <div
              onClick={() => setIsMenuOpen(false)}
              className={`bg-darkglass backdrop-blur-sm absolute h-dvh w-full top-0 right-0 transition-all ${
                isMenuOpen ? "visible" : "invisible"
              }`}
            ></div>
            <div
              className={`bg-darkbox2 absolute h-dvh w-3/4 top-0 transition-all px-5 right-0 ${
                isMenuOpen ? "visible" : "invisible"
              }`}
            >
              <div className="flex items-center justify-between py-3">
                <GrClose
                  className="text-xl"
                  onClick={() => setIsMenuOpen(false)}
                />
                <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
                  <img
                    src={logo}
                    className="w-10"
                    alt="logo"
                  />
                </Link>
              </div>
              <hr className="border-border" />
              <div className="flex min-h-[calc(100dvh-5rem)] flex-col justify-between text-xl">
                <div className="flex flex-col gap-5 my-5">
                  <Link className="flex gap-5 items-center" to={"/"}>
                    <IoHomeOutline />
                    <span>Home</span>
                  </Link>
                  <Link className="flex gap-5 items-center" to={"/about"}>
                    <HiOutlineIdentification />
                    <span>About Us</span>
                  </Link>
                  <Link className="flex gap-5 items-center" to={"/articles"}>
                    <RiArticleLine />
                    <span>Articles</span>
                  </Link>
                  <Link className="flex gap-5 items-center" to={"/news"}>
                    <FaRegNewspaper />
                    <span>News</span>
                  </Link>
                  <Link
                    className="flex gap-5 items-center"
                    to={"/about#contact"}
                  >
                    <LuMessageSquare />
                    <span>contact Us</span>
                  </Link>
                </div>
                <div className="">
                  <hr className="border-border my-5" />
                  <Link className="flex gap-5 items-center mb-2" to={"/"}>
                    <IoIosLogOut />
                    <span>logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* for small screens */}
          {/* for larger screens */}
          <div className="icons hidden md:flex items-center gap-3">
            <DarkModeToggle />
            <Link to={"/"}>
              <Button>
                <span className="px-4">join now</span>
              </Button>
            </Link>
          </div>
          {/* for larger screens */}
        </div>
      </nav>
    </>
  );
}
