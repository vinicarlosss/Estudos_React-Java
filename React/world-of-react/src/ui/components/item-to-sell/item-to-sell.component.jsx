import React from "react";
import "./item-to-sell.style.css";
export function ItemToSell({ item, handleSelectedItemChangeToSell, selected }) {
  function getClass() {
    if (Number(selected) === Number(item.id)) return "selected";
    return "not-selected";
  }

  const itemClass = getClass();

  return (
    <label className={`container ${itemClass}`}>
      <input
        className="hide"
        type="radio"
        name="item"
        id={item.id}
        value={item.id}
        onChange={handleSelectedItemChangeToSell}
      />
      <span className="info">
        {`${item.name} - Tipo: ${item.type}`}
        <br />
      </span>
      <span className="info">Preço de venda: {item.sellPrice}</span>
      <img className="container-img" src={item.image} alt={item.name} />
    </label>
  );
}
