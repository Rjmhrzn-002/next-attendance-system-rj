"use client";
import { useRouter } from "next/navigation";
import AdminLayout from "./admin/layout";
import UserLayout from "./user/layout";

const Main = () => {
  const router = useRouter();

  const isAdminRoute = router.pathname?.startsWith("/admin") || false;

  return isAdminRoute ? <AdminLayout /> : <UserLayout />;
};

export default Main;
