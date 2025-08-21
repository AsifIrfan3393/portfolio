import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { contact } from "@/data";   // ✅ use contact
import MagicButton from "./MagicButton";

const ensureUrl = (u: string | undefined): string => {
  if (!u) return "#";
  return u.startsWith("http://") || u.startsWith("https://") ? u : `https://${u}`;
};

const Footer = () => {
  const email = contact?.email ?? "asifi.it.23@nitj.ac.in";
  const linkedin = ensureUrl(contact?.linkedin ?? "linkedin.com");
  const github = ensureUrl(contact?.github ?? "github.com");

  const openLink = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <p className="text-white-200 md:mt-10 my-5 text-center"></p>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-20">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © Asif Irfan
        </p>

        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openLink(e, linkedin)}
            className="inline-flex items-center justify-center p-3 rounded-full text-white hover:bg-white/10 transition-transform transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FaLinkedin size={32} />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openLink(e, github)}
            className="inline-flex items-center justify-center p-3 rounded-full text-white hover:bg-white/10 transition-transform transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
