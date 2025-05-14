import Intro from "@/components/atomic/molecules/Intro";
import CardGrid from "@/components/atomic/organisms/CardGrid";
import XPGrid from "@/components/atomic/organisms/XPGrid";
import Image from "next/image";

export default function Home() {
  return (
    <>
  
      <Intro/>
      <XPGrid/>
      <CardGrid/>
    </>
  );
}
