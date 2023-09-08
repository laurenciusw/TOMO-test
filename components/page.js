import { useRouter } from "next/router";
import Sidebar from "./sidebar";

export default function Page({ children }) {
  const router = useRouter();

  // Daftar rute di mana Anda ingin sidebar ditampilkan
  const showSidebarRoutes = ["/info", "/artist", "/exhibition", "/menu"];

  const shouldShowSidebar = showSidebarRoutes.includes(router.pathname);

  return (
    <>
      {shouldShowSidebar && <Sidebar />} <main>{children}</main>
    </>
  );
}
