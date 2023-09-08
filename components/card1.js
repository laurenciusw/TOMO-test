import Page from "@/components/page";
import Image from "next/image";
import bg4 from "../public/bg4.jpg";
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
              APOCALYPTIC SMILE
            </p>
          </div>

          {/* Text */}
          <p className="text-base lg:text-lg mb-20">25.07.2020</p>
          <p className="text-base lg:text-lg">IRWAN AHMET</p>
          <p className="text-base lg:text-lg">TITA SALINA</p>
        </div>

        <div className="md:w-1/2 lg:w-2/3 p-5">
          {/* Image */}
          <Image
            src={bg4}
            className="w-auto min-h-screen object-cover"
            layout="responsive"
            alt="Album Cover"
          />
        </div>
      </div>
    </Page>
  );
}
