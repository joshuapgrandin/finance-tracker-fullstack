const NavButton = ({ text }) => {
  return (
    <button className="bg-brand-700 px-4 py-1 rounded-md text-neutral-50 text-sm hover:bg-brand-600 transition-all">
      {text}
    </button>
  );
};

export default NavButton;
