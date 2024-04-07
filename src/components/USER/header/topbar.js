"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/GLOBAL/button/Button";
// import { removeToken } from "@/app/admin/adminAuth";
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
const Topbar = () => {
  const router = useRouter();
  // const { tokenSetter } = useContext(AuthContext);
  // const handleLogout = () => {
  //   removeToken();
  //   tokenSetter("");
  //   router.replace("/admin/login");
  // };
  return (
    <main className="sticky top w-full min-h-16 shadow-lg flex items-center px-6 md:px-0 bg-white">
      <section className="max-w-[1180px] w-full mx-auto flex items-center justify-between ">
        <div className="uppercase text-xl font-bold cursor-default text-primary">
          _LOGO
        </div>
        <div className="flex gap-6 items-center">
          <Button title="Logout" bgColor="#0F172A" />
        </div>
      </section>
    </main>
  );
};

export default Topbar;
