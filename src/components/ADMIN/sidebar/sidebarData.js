"use client";

import { FaHome, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const sidebarList = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaHome size={25} />,
  },
  {
    id: "employee",
    title: "Employees",
    path: "/admin/employees",
    icon: <FaUser size={25} />,
  },
  {
    id: "message",
    title: "Messages",
    path: "/admin/message",
    icon: <FaMessage size={25} />,
  },
];
