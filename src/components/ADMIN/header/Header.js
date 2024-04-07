"use client";

// global imports
import { useRouter } from "next/navigation";
import { useContext } from "react";

// auth imports
// import { removeToken } from "@/app/admin/adminAuth";
import { AuthContext } from "@/provider/AuthProvider";

// local imports
import Button from "@/components/GLOBAL/button/Button";

const Topbar = () => {
  const router = useRouter();
  const { tokenSetter } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    tokenSetter("");
    router.replace("/admin/login");
  };
  return (
    <main className="sticky top w-full min-h-16 shadow-lg flex items-center px-6 md:px-0 bg-white">
      <section className="max-w-[1180px] w-full mx-auto flex items-center justify-between ">
        <div className="uppercase text-xl font-bold cursor-default text-primary">
          _LOGO
        </div>
        <div className="flex gap-6 items-center">
          <Button title="Logout" bgColor="#0F172A" onClick={handleLogout} />
        </div>
      </section>
    </main>
  );
};

export default Topbar;
