import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";


type layoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: layoutProps) {

  return (
    <div className={`font-montserrat`} >
      <Head>
        <title>RichardHD | DevBlog</title>
        <meta
          name="description"
          content="DevBlog where I will publish the development of my day to day applications, as well as some reflections."
        />
        <meta name="auhtor" content="RichardHD" />
      </Head>
      <main className="w-screen bg-gray-900">
        {children}
        </main>
      <footer className="overflow-hidden text-center flex items-center justify-center bg-zinc-900 text-white text-xs sm:text-sm">
        © Desarrollado con amor 💖 por &nbsp;
        <Link
          href="https://www.linkedin.com/in/richardhd/"
          className="flex items-center justify-center"
        >
          <span className="hover:text-blue-500 ">RichardHD</span>
          <FaLinkedin size={20} />
        </Link>
      </footer>
    </div>
  );
}
