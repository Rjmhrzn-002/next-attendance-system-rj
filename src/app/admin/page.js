"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import AdminLayout from "./layout";
import { AuthContext } from "@/provider/AuthProvider";
import Dashboard from "./dashboard/page";
import ProtectedRoute from "./protectedRoute";

const AdminIndex = () => {
  const router = useRouter();
  const { token } = useContext(AuthContext);
  console.log(!!token);

  useEffect(() => {
    if (!token) {
      router.push("/admin/login");
    }
  }, [token, router]);

  return (
    <>
      {!!token ? (
        <ProtectedRoute>
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </ProtectedRoute>
      ) : null}
    </>
  );
};

export default AdminIndex;
