"use client";
import React, { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { getCapitalizedTextFromRoute, LinkClassName } from "@/helpers";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <header className="bg-(--background) p-4 relative">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <p className="font-bold text-xl">Palware</p>
          </Link>
          <nav className="gap-3 hidden md:flex">
            <LinkOuter href="/services" />
            <LinkOuter href="/adopt" />
            <LinkOuter href="/contact" />
          </nav>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" md:hidden">
      <div
        id="hamburger"
        className={`${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav
        className={`absolute top-full right-0 bg-(--background) overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-6 py-2">
          <LinkOuter href="/services" />
          <LinkOuter href="/adopt" />
          <LinkOuter href="/contact" />
        </div>
      </nav>
    </div>
  );
};

const LinkOuter = ({ href }: { href: string }) => {
  const active = usePathname() === href;
  return (
    <Link href={href} className={LinkClassName + (active ? " font-bold" : "")}>
      {getCapitalizedTextFromRoute(href)}
    </Link>
  );
};

export default Header;
