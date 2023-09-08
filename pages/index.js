import Page from "@/components/page";
import Image from "next/image";
import bg3 from "../public/bg3.jpg";
import { useRouter } from "next/router";
import MySlider from "@/components/MySlider";

export default function Home() {
  const router = useRouter();

  return (
    <Page>
      <div>
        <MySlider />
      </div>
    </Page>
  );
}
