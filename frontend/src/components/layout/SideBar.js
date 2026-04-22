import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

import {
  LayoutDashboard,
  Receipt,
  Tags,
  PiggyBank,
  BarChart3,
} from "lucide-react";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      animate={{ width: isDesktop ? 256 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-neutral-50 border-r border-neutral-200 flex flex-col h-screen overflow-hidden shadow-lg p-6"
    >
      <div className="mt-4 mb-8">
        <Logo />
      </div>

      <ul className="space-y-6 text-neutral-900">
        <motion.li
          whileHover={{ scale: 1.02, x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex gap-3 items-center"
        >
          <LayoutDashboard size={20} className="flex-shrink-0" />
          <AnimatePresence>
            {isDesktop && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                Dashboard
              </motion.span>
            )}
          </AnimatePresence>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.02, x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex gap-3 items-center"
        >
          <Receipt size={20} className="flex-shrink-0" />
          <AnimatePresence>
            {isDesktop && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                Transactions
              </motion.span>
            )}
          </AnimatePresence>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.02, x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex gap-3 items-center"
        >
          <Tags size={20} className="flex-shrink-0" />
          <AnimatePresence>
            {isDesktop && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                Categories
              </motion.span>
            )}
          </AnimatePresence>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.02, x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex gap-3 items-center"
        >
          <PiggyBank size={20} className="flex-shrink-0" />
          <AnimatePresence>
            {isDesktop && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                Budgets
              </motion.span>
            )}
          </AnimatePresence>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.02, x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex gap-3 items-center"
        >
          <BarChart3 size={20} className="flex-shrink-0" />
          <AnimatePresence>
            {isDesktop && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                Reports
              </motion.span>
            )}
          </AnimatePresence>
        </motion.li>
      </ul>

      <div className="mt-auto flex gap-2 items-center">
        <div className="bg-orange-500/60 px-3 py-1 rounded-full flex-shrink-0">
          <p className="text-orange-900">J</p>
        </div>
        <AnimatePresence>
          {isDesktop && (
            <motion.p
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
            >
              Josh
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SideBar;
