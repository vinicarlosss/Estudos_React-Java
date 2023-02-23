import "./input.style.css";

export function Input({ tipo, titulo, name, valor, onChange, erro }) {
  return (
    <div className="input__div">
      <label htmlFor={name}>{titulo}</label>
      <div className="input__div--input">
        <input  
          id={name}
          type={tipo}
          name={name}
          value={valor}
          onChange={onChange}
        />
      </div>
      <p>{erro}</p>
    </div>
  );
}
