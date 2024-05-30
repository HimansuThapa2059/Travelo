"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { FC, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: FC = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container py-5 z-30">
      <Link href="/">
        <p className="font-bold text-2xl ">
          tra<span className="text-green-50">V</span>elo
        </p>
      </Link>

      {!showNavLinks && (
        <Menu
          className="h-8 w-8  cursor-pointer inline-block lg:hidden z-50"
          onClick={() => setShowNavLinks((show) => !show)}
        />
      )}

      <ul
        className={`${
          showNavLinks
            ? "fixed  w-[45%] right-0 top-0 h-full pt-12  space-y-5 z-40 backdrop-blur-lg bg-red-200"
            : "hidden h-full gap-12 lg:flex"
        }`}
      >
        {showNavLinks && (
          <X
            className="h-8 w-8  cursor-pointer inline-block  z-50 fixed top-[18px] right-[24px]"
            onClick={() => setShowNavLinks((show) => !show)}
          />
        )}

        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-semibold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all  hover:font-extrabold hover:text-green-50"
            onClick={() => setShowNavLinks(false)}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
