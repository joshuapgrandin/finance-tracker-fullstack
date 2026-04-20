import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./layout/Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-12 py-12 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Top section - Logo + Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-neutral-500">
              Track your finances in seconds. Simple, fast, no spreadsheets.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/joshuapgrandin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center md:text-left">
          <p className="text-sm text-neutral-500">
            © 2026 FinancePal. Built with React by Josh.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
