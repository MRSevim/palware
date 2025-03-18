import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col gap-3 items-center my-25">
        <Image
          src="/images/not-found.jpg"
          width={400}
          height={267}
          priority
          className="rounded-lg"
          alt="sad puppy"
        ></Image>
        <h1 className="font-bold text-2xl">Oops</h1>
        <p>Could not find requested resource</p>

        <PrimaryButton href="/">Return Home</PrimaryButton>
      </div>
    </Container>
  );
}
