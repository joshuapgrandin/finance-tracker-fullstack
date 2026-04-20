import { motion } from "framer-motion";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className="bg-brand-700 px-6 py-3 rounded-lg text-white font-semibold hover:bg-brand-600 transition-colors"
    >
      {text}
    </motion.button>
  );
};

export default PrimaryButton;
