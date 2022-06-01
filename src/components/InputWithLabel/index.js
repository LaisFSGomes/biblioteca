const InputWithLabel = ({id, label, value, type, onInputChange}) => {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default InputWithLabel;
