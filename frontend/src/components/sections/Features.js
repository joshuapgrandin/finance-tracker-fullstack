import { Zap, TrendingUp, DollarSign } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto bg-blue-50 p-16 border border-neutral-200">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={Zap}
            title="Fast logging"
            description="Add a transaction in under 5 seconds. Amount, category, done."
            iconBgColor="bg-yellow-400/50"
            iconColor="text-yellow-900"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={TrendingUp}
            title="Clear categories"
            description="Group spending by type. See patterns you'd otherwise miss."
            iconBgColor="bg-blue-400/50"
            iconColor="text-blue-900"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={DollarSign}
            title="Live balance"
            description="Your balance updates the moment you log. No syncing, no waiting."
            iconBgColor="bg-green-400/50"
            iconColor="text-green-900"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
