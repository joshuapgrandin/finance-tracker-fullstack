import BalanceCard from "../cards/BalanceCard";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import StatCard from "../cards/StatCard";
import TransactionItem from "../cards/TransactionItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 m-6">
      {/*LEFT SIDE TEXT */}
      <div className="pt-10 m-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-semibold text-neutral-900"
        >
          Know where your <br /> money goes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-neutral-500 mt-4"
        >
          Log income and expenses in seconds. See your balance update in real
          time. No spreadsheets, no bank linking, no faff.
        </motion.p>

        {/*BUTTONS*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex gap-2 mt-6"
        >
          <PrimaryButton text={"Sign up free"} link={"/dashboard"} />
          <SecondaryButton text={"See a demo"} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-xs mt-2 text-neutral-300"
        >
          Free forever - No card required
        </motion.p>
      </div>
      {/*RIGHTSIDE CARD */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="bg-white p-6 shadow-xl border-neutral-200 rounded-lg m-6"
      >
        <div className="p-4 space-y-2">
          <BalanceCard />
          <div className="grid grid-cols-2 gap-4">
            <StatCard text={"Income"} amount={"+ £3,200"} />
            <StatCard text={"Expenses"} amount={"- £352.50"} />
          </div>
          <div className="flex flex-col gap-2">
            <TransactionItem
              transactionType={"Groceries"}
              description={"Tesco Groceries"}
              amount={"- £47.20"}
              isIncome={false}
            />
            <TransactionItem
              transactionType={"Entertainment"}
              description={"Netflix"}
              amount={"- £12.99"}
              isIncome={false}
            />
            <TransactionItem
              transactionType={"Salary"}
              description={"Work Income"}
              amount={"+ £3,200"}
              isIncome={true}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
