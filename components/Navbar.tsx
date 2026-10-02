"use client";
import { Socials } from "@/constants";
import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <FaLinkedin size={22} />,
  GitHub: <FaGithub size={22} />,
  LeetCode: <SiLeetcode size={20} />,
  CodeChef: <SiCodechef size={20} />,
  Codeforces: <SiCodeforces size={20} />,
};

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[80px] bg-transparent flex justify-between items-center px-8 md:px-20">
      {/* Logo / Name */}
      <h1 className="text-white text-[22px] font-semibold">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          Portfolio
        </span>
      </h1>

      {/* Social Icons */}
      <div className="flex flex-row items-center gap-1">
        {Socials.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className="group relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
          >
            {/* Glow ring on hover */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200 blur-sm"
              style={{ backgroundColor: social.color }}
            />
            {/* Icon */}
            <span
              className="transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = social.color)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
            >
              {iconMap[social.name]}
            </span>

            {/* Tooltip */}
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;