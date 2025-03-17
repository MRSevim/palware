import React from "react";
import Link from "next/link";
import Container from "./Container";

const Header = () => {
  return (
    <header className="bg-(--background) p-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <p className="font-bold text-xl"> Palware</p>
          </Link>
          <nav> 123</nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
