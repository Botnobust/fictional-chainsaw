function Button({ label }) {
  const isOperator = ["+", "-", "*", "/", "="].includes(label);

  return (
    <button className={isOperator ? "button operator" : "button"}>
      {label}
    </button>
  );
}

export default Button;