"use client";
import Sidebar from "@/components/ADMIN/sidebar/Sidebar";
import Header from "@/components/ADMIN/header/Header";
import Footer from "@/components/GLOBAL/footer/Footer";
import AuthProvider from "@/provider/AuthProvider";
// import ProtectedRoute from "./protectedRoute";

const AdminLayout = ({ children }) => {
  return (
    <AuthProvider>
      <main className="w-full h-screen flex flex-col max-w-[1440px] mx-auto">
        <Header />
        <section className="flex-1 flex bg-bgBlack">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </section>
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default AdminLayout;
