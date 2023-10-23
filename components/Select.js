import { allserv } from "@/data/allserv";

const Select = ({ label, value, handleChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={handleChange}>
        {allserv.map((option) => {
          return (
            <option key={option.id} value={option.group}>
              {option.group}
            </option>
          );
        })}
      </select>
    </label>
  );
};
export default Select;
