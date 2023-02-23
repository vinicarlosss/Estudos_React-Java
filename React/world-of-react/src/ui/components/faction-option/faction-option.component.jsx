import React from "react";
import "./faction-option.style.css";

export function FactionOption({ faction, handleChange, selected }) {
  function getClass() {
    if (faction.localeCompare(selected) === 0) return "selected-faction";
    return "not-selected-faction";
  }

  const selectedType = getClass();

  return (
    <label className={`faction-option-container ${selectedType} option-font`}>
      <p>{faction}</p>
      <input
        className="hide"
        type="radio"
        name="faction"
        id={faction}
        value={faction}
        onChange={handleChange}
        required
      />
    </label>
  );
}
