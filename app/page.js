// CSS module for styling
import { FaFacebookF, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-[40rem] relative">
        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8 place-items-center md:place-items-start">
          {/* Company Info */}
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="w-[220px] mb-4"
            />
            <p className="text-[#273c75] mt-1 text-[20px]">
              Innovate. Build. Grow.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4 mt-[50px] ml-[20px] border-l-0 md:border-l-0 lg:border-l-2 lg:border-blue-500 pl-[30px]">
            <a
              href="#"
              className="text-[#273c75] hover:underline flex items-center text-[18px] gap-4 no-underline"
            >
              <MdEmail />
              jp@ivey.solutions
            </a>
            <a
              href="#"
              className="text-[#273c75] hover:underline flex items-center text-[18px] gap-4 no-underline"
            >
              <FaPhoneVolume />
              334-200-7299.
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555290153909"
              className="text-[#273c75] hover:underline flex items-center text-[18px] gap-4 no-underline"
            >
              <FaFacebookF />
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/savvy-software/"
              className="text-[#273c75] hover:underline flex items-center text-[18px] gap-4 no-underline"
            >
              <FaLinkedinIn />
              Linkedin
            </a>
          </div>
        </div>

        {/* Wavy SVG Footer */}

        <div className="relative w-full overflow-hidden">
          <svg
            className="w-full h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#4f46e5"
              d="
      M0,160 
      C240,240 320,80 640,160 
      C960,240 1120,80 1440,160 
      L1440,320 
      L0,320 
      Z"
            />
          </svg>
        </div>
      </div>

      {/* Horizontal flowing wave animation */}
    </div>
  );
}
