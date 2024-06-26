"use client";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const NavLists = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handler = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard")) {
    return <div className="bg-amber-900 p-4 text-white">Dashboard layout</div>;
  }

  return (
    <nav className="bg-orange-500 p-6 text-white flex justify-between items-center">
      <h2 className="text-4xl font-bold">
        Next <span className="text-green-500">Hero</span> Render
      </h2>
      <ul className="flex justify-between items-center space-x-5">
        {NavLists.map((nav) => (
          <Link
            key={nav.path}
            href={nav.path}
            className={`${
              pathName === nav.path && "text-green-500 underline font-semibold"
            }`}
          >
            {nav.title}
          </Link>
        ))}
      </ul>
      <button
        onClick={handler}
        className="bg-white text-green-500 font-bold px-3 py-1 rounded"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
