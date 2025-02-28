"use client";

import Link from "next/link";
const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer className="w-full pt-5 p-2  bg-slate-100 dark:bg-[#020617] sticky top-[100vh]">
      {/* <hr className="my-4" /> */}
      <div className="mx-auto max-w-7xl items-center lg:justify-between px-4 md:flex lg:px-0 w-11/12 md:w-11/12 lg:w-11/12  xl:container">
        <Link href={"/"}>
          <div className="lg:inline-flex items-center hidden">
            <span className="bg-gray-100 rounded p-1 pr-0">
            
            </span>
          </div>
        </Link>
        <div className="md:mt-0 text-center lg:space-y-0 space-y-5">
          <p>
            © {year}
            <a
              href="https://github.com/Bhavin-307"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bhavin Sali GitHub Profile"
            >
              <span className="font-bold text-indigo-500 hover:underline ml-1 mr-1">
                Bhavin Sali
              </span>
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
