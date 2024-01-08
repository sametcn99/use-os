export const renderInputField = (label: any, value: any, onChange: any) => (
  <div className="flex flex-col text-white">
    <label>{label}</label>
    <input
      type="text"
      className="p-2 text-black"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
