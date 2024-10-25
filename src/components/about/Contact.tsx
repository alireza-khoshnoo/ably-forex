import { useState } from "react";
import Socials from "../Socials";
import Button from "../Button";
// import icons
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  return (
    <div className="pt-24 mb-10 md:mb-20">
      <h3 className="text-3xl font-bold">
        <span className="glow">Contact</span> Us
      </h3>
      <div className="flex gap-3 md:gap-5 flex-col md:flex-row">
        <div className="mt-7 flex-1">
          <Socials />
          <div className="flex flex-col m-5 ml-0">
            <div className="flex items-center gap-5 my-5">
              <Button>
                <BiPhone className="text-2xl m-1" />
              </Button>
              <div className="flex flex-col">
                <span>+98 903 760 4266</span>
                <span>+98 903 760 4266</span>
              </div>
            </div>
            <div className="flex items-center gap-5 my-5">
              <Button>
                <MdEmail className="text-2xl m-1" />
              </Button>
              <div className="flex flex-col">
                <span>ably@gmail.com</span>
                <span>example@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-5 my-5">
              <Button>
                <BiLocationPlus className="text-2xl m-1" />
              </Button>
              <div className="flex flex-col">
                <span>Shiraz, Fars, Iran</span>
                <span>9th, Shariati (moali abad)</span>
              </div>
            </div>
          </div>
        </div>
        {/* contact form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col flex-1 gap-5 md:my-5 "
          action=""
        >
          <div className="flex flex-col gap-5">
            <input
              onChange={(e) => setName(e.target.value.trim())}
              value={name}
              className="bg-glass py-3 px-5 text-lighttext rounded-lg"
              placeholder="your name"
              type="text"
              name="from_name"
              id=""
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value.trim())}
              value={email}
              className="bg-glass py-3 px-5 text-lighttext rounded-lg autofill:bg-transparent"
              placeholder="Email Address"
              type="email"
              name="user_email"
              id=""
              required
            />
          </div>
          <div className="w-full h-full relative">
            <textarea
              //   onChange={(e) => setMessage(e.target.value.trim())}
              className="bg-glass py-3 px-5 text-lighttext rounded-lg w-full h-full"
              placeholder="Your Message ... "
              name="message"
              id=""
              required
            ></textarea>
            <div className="flex justify-center md:justify-end mt-5">
              <Button>
                <div className="flex gap-3 items-center mt-1 mb-1.5 mx-3">
                  <span>send message</span>
                  <LiaTelegramPlane className="text-xl" />
                </div>
              </Button>
            </div>
          </div>
        </form>
        {/* contact form */}
      </div>
    </div>
  );
}
