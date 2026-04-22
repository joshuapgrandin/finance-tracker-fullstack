const Logo = () => {
  return (
    <div className="">
      <a href="/home">
        <div className="inline bg-brand-700 rounded-md py-1 px-2">
          <span className="text-white text-sm">F</span>
        </div>
        <span className="hidden md:inline font-semibold px-2 text-neutral-900">
          FinancePal
        </span>
      </a>
    </div>
  );
};

export default Logo;
