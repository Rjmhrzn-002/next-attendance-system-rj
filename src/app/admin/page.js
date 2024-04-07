"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import AdminLayout from "./layout";
import { AuthContext } from "@/provider/AuthProvider";
import Dashboard from "./dashboard/page";
import ProtectedRoute from "./protectedRoute";

const AdminIndex = () => {
  const router = useRouter();
  const { token } = useContext(AuthContext);
  console.log(!!token);

  return (
    <>
      {!!token ? (
        <ProtectedRoute>
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </ProtectedRoute>
      ) : (
        router.push("/admin/login")
      )}
    </>
  );
};

export default AdminIndex;
