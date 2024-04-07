"use client";
import { FaArrowCircleRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { sidebarList } from "./sidebarData";

// import "./sidebar.css";

const Sidebar = () => {
  // const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="w-max min-w-52 h-full bg-primary text-center flex flex-col gap-3 py-3 px-2">
      {sidebarList.map((item) => {
        const isActive = pathname.startsWith(item.path);
        // console.log(isActive);
        return (
          <Link
            className={`${
              isActive
                ? "bg-secondary-foreground text-white"
                : "text-primary bg-background"
            } w-full px-3 py-4 rounded-lg shadow-lg shadow-slate-950 duration-300  hover:translate-y-[1px] flex justify-center items-center md:justify-between gap-2`}
            href={item.path}
            key={item.id}
          >
            <div className="flex gap-3">
              <span>{item.icon}</span>
              <span className=" hidden md:block">{item.title}</span>
            </div>
            <span className={`${isActive ? " hidden md:block" : "hidden"}`}>
              <FaArrowCircleRight />
            </span>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
