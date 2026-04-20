import BalanceCard from "./BalanceCard";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import StatCard from "./StatCard";
import TransactionItem from "./TransactionItem";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 m-6">
      {/*LEFT SIDE TEXT */}
      <div className="pt-10 m-6">
        <h1 className="text-4xl font-semibold text-neutral-900">
          Know where your <br /> money goes.
        </h1>
        <p className="text-neutral-500 mt-4">
          Log income and expenses in seconds. See your balance update in real
          time. No spreadsheets, no bank linking, no faff.
        </p>
        {/*BUTTONS*/}
        <div className="flex gap-2 mt-6">
          <PrimaryButton text={"Sign up free"} />
          <SecondaryButton text={"See a demo"} />
        </div>
        <p className="text-xs mt-2 text-neutral-300">
          Free forever - No card required
        </p>
      </div>
      {/*RIGHTSIDE CARD */}
      <div className="bg-white p-6 shadow-xl border-neutral-200 rounded-lg m-6">
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
      </div>
    </section>
  );
};

export default Hero;
