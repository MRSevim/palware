"use client";
import React from "react";
import Link from "next/link";
import Container from "./Container";
import { getCapitalizedTextFromRoute, LinkClassName } from "@/helpers";
import { usePathname } from "next/navigation";
const Header = () => {
  return (
    <header className="bg-(--background) p-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <p className="font-bold text-xl">Palware</p>
          </Link>
          <nav className="flex gap-3">
            <LinkOuter href="/services" />
            <LinkOuter href="/adopt" />
            <LinkOuter href="/contact" />
          </nav>
        </div>
      </Container>
    </header>
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
