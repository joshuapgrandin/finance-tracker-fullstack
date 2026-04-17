const FilterDropdown = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange} className="">
        {options.map((option) => (
          <option key={value} value={value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
