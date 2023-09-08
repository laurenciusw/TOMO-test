import Page from "@/components/page";
import Image from "next/image";
import bg5 from "../public/bg5.jpg";
import Link from "next/link";

export default function Card1() {
  return (
    <Page>
      <div className="md:flex min-h-screen">
        <div className="md:w-1/2 lg:w-1/3 p-5 pb-20">
          <div className="text-lg lg:text-lg font-bold mb-40">
            <Link href="/menu">ROH</Link>
          </div>
          {/* Title */}
          <div className="mb-10">
            <p className="text-2xl lg:text-3xl font-semibold">
              EXHIBITION TITLE
            </p>
          </div>

          {/* Text */}
          <p className="text-base lg:text-lg mb-20">10.11.2020</p>
          <p className="text-base lg:text-lg">ADITYA NOVALI</p>
          <p className="text-base lg:text-lg">ALIN SUNARYO</p>
          <p className="text-base lg:text-lg">FAISAL HABIBI</p>
          <p className="text-base lg:text-lg">SYAGINI RATNA WULAN</p>
          <p className="text-base lg:text-lg">SYAIFUL GARIBALDI</p>
          <p className="text-base lg:text-lg">UJI "HANAN" HANDOKO</p>
          <p className="text-base lg:text-lg">KEI IZUMA</p>
        </div>

        <div className="md:w-1/2 lg:w-2/3 p-5">
          {/* Image */}
          <Image
            src={bg5}
            className="w-auto min-h-screen object-cover"
            layout="responsive"
            alt="Album Cover"
          />
        </div>
      </div>
    </Page>
  );
}
