import Image from "next/image";
import bg3 from "../public/bg3.jpg";
import Page from "@/components/page";

export default function Info() {
  return (
    <Page>
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-full"></div>
        <Image src={bg3} className="w-screen h-screen"></Image>
      </div>
    </Page>
  );
}
