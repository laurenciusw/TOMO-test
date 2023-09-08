import Image from "next/image";
import Page from "@/components/page";
import bg2 from "../public/bg2.jpg";

export default function Exhibition() {
  return (
    <Page>
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-full"></div>
        <Image src={bg2} className="w-screen h-screen"></Image>
      </div>
    </Page>
  );
}
