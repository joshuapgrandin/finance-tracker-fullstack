import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, onClick, size = "medium", link }) => {
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={`bg-brand-700 rounded-lg text-white font-semibold hover:bg-brand-600 transition-colors ${sizes[size]}`}
    >
      <Link to={link}>{text}</Link>
    </motion.button>
  );
};

export default PrimaryButton;
