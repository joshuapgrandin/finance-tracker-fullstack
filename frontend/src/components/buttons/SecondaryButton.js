import { motion } from "framer-motion";

const SecondaryButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className="bg-neutral-50 border-neutral-200 border px-6 py-3 rounded-lg text-neutral-900 font-semibold hover:bg-neutral-100 hover:border-neutral-300 transition-colors"
    >
      {text}
    </motion.button>
  );
};

export default SecondaryButton;
