import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-darktext dark:text-lighttext">
      <h3 className="text-[10rem] font-bold text-center -mt-20 hue-rotate-[120deg] glow">
        404
      </h3>
      <p className="text-4xl opacity-80 font-bold">Page Not Found</p>
      <div className="flex justify-center mt-10">
        <Link to="/">
          <Button>
            <span className="px-5">back to homepage</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
