const SecondaryButton = ({ text }) => {
  return (
    <button className="bg-neutral-50 border-neutral-200 border px-4 py-2 rounded-md text-neutral-900 text-sm hover:bg-neutral-100 hover:border-neutral-300 transition-all">
      {text}
    </button>
  );
};

export default SecondaryButton;
