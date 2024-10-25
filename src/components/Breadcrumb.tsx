import React from "react";
import { Link } from "react-router-dom";
import { breadcrumbProps } from "../../types";
export default function Breadcrumb({ links }: breadcrumbProps) {
  return (
    <div
      data-aos="fade-right"
      className="my-10 text-lg bg-glass px-5 py-1 w-fit flex items-center h-8 overflow-hidden rounded-lg"
    >
      <Link to="/" className="hover:text-c3">
        Home
      </Link>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <div className="mr-5 -ml-3 w-10 h-10 rotate-45 border-t-4 border-r-4 border-c2"></div>
          <Link to={link.path} className="hover:text-c3">
            {link.pathName}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
