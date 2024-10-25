import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Button from "./Button";

export default function Socials() {
  return (
    <div className="socials flex gap-3">
      <Button>
        <FaFacebookF />
      </Button>
      <Button>
        <FaInstagram />
      </Button>
      <Button>
        <FaLinkedinIn />
      </Button>
      <Button>
        <IoLogoYoutube />
      </Button>
      <Button>
        <FaTwitter />
      </Button>
    </div>
  );
}
