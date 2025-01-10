import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://twitch.com", icon: <FaTwitch /> },
  { href: "https://github.com", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-[40px] opacity-80 w-screen text-black ">
      <div
        className="container mx-auto flex flex-col items-center 
          justify-between gap-4 px-4 md:flex-row"
      >
        <img
          src="https://www.neevhq.com/neev.svg"
          alt="Neev logo"
          className="w-6 h-6"
        ></img>

        <p className="text-center text-lg md:text-left">
          &copy; Neev 2025. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xl transition-colors duration-500 ease-in-out hover:text-blue-800"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
