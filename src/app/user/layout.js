"use client";
import Header from "@/components/USER/header/topbar";
import Footer from "@/components/GLOBAL/footer/Footer";

const UserLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex flex-col max-w-[1440px] mx-auto">
      <Header />
      <section className="flex-1 flex bg-slate-50">
        <main className="flex-1 p-4">{children}</main>
      </section>
      <Footer />
    </main>
  );
};

export default UserLayout;
