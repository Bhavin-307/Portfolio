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
            <svg
                width="180"
                height="40"
                viewBox="0 0 180 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                <style>
                  {`
            @keyframes drawStroke {
              0% { 
                stroke-dashoffset: 200;
                opacity: 0;
              }
              10% { 
                opacity: 1;
              }
              100% { 
                stroke-dashoffset: 0;
                opacity: 1;
              }
            }

            @keyframes fillText {
              0%, 40% { 
                fill-opacity: 0;
              }
              100% { 
                fill-opacity: 1;
              }
            }

            .logo-text {
              font-family: 'Inter', system-ui, -apple-system, sans-serif;
              font-weight: 700;
              letter-spacing: 0.02em;
            }

            .animated-text {
              fill: currentColor;
              fill-opacity: 0;
              stroke: currentColor;
              stroke-width: 1.5;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-dasharray: 200;
              animation: drawStroke 1s cubic-bezier(0.4, 0, 0.2, 1) forwards,
                         fillText 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
          `}
                </style>

                <g className="logo-text">
                  <text
                    x="15"
                    y="26"
                    className="animated-text"
                    fontSize="24"
                    letterSpacing="0.5"
                  >
                    Bhavin Sali
                  </text>
                </g>
              </svg>
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
