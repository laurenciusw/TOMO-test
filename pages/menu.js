import Image from "next/image";
import Page from "@/components/page";
import bg7 from "../public/bg7.jpg";

export default function Menu() {
  return (
    <Page>
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-full"></div>
        <Image src={bg7} className="w-screen h-screen"></Image>
      </div>
    </Page>
  );
}
