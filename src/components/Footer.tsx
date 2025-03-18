import Link from "next/link";
import Container from "./Container";
import Subscribe from "./Subscribe";
import BrandIcon from "./BrandIcon";
import { LinkClassName } from "@/helpers";

const Footer = () => {
  return (
    <footer className="bg-(--background) p-4">
      <Container>
        <div className="grid custom-grid-template gap-8 justify-center items-center">
          <div className="flex flex-col gap-3 max-w-md">
            <Link href="/">
              <p className="font-bold text-xl"> Palware</p>
            </Link>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              vero.
            </p>
            <div className="flex">
              <BrandIcon type="facebook" />
              <BrandIcon type="twitter" />
              <BrandIcon type="instagram" />
            </div>
          </div>
          <Column />
          <Column />
          <div className="flex flex-col justify-center gap-4">
            <p> Column</p>
            <Link href="/services" className={LinkClassName}>
              Services
            </Link>
            <Link href="/adopt" className={LinkClassName}>
              Adopt
            </Link>
            <Link href="/contact" className={LinkClassName}>
              Contact
            </Link>
          </div>
          <Subscribe />
        </div>
      </Container>
    </footer>
  );
};

const Column = () => {
  const para = <p className={LinkClassName}>Goes nowhere</p>;

  return (
    <div className="flex flex-col justify-center gap-4">
      <p> Column</p>
      {para}
      {para}
      {para}
    </div>
  );
};

export default Footer;
