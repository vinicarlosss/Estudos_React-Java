import { useState } from 'react';
import { MdCheckCircleOutline, MdOutlineCancel } from 'react-icons/md';
import { useUpdateGrocery } from '../../../hook';
import { ConfirmDeleteButton } from '../ConfirmButton/confirmDeleteButton.component';
import { TextInput } from '../TextInput/textInput.component';
import './groceryItem.style.css';
export function GroceryItem({ item, handleRemove, updateInfo, empty }) {
  const [updateItem, setUpdateItem] = useState(false);
  const { input, handleChange, handleSubmit } = useUpdateGrocery(
    item,
    updateInfoAndToggle
  );

  async function updateInfoAndToggle() {
    updateInfo();
    toggleUpdateItem();
  }
  function toggleUpdateItem() {
    setUpdateItem(!updateItem);
  }

  function renderItem() {
    return (
      <>
        {updateItem ? (
          <tr>
            <td className="list-table-body-row-input">
              <TextInput
                className="list-table-row-input"
                onChange={handleChange}
                inputName="name"
                inputValue={input.name}
              />
            </td>
            <td className="list-table-body-row-input">
              <TextInput
                className="list-table-row-input"
                onChange={handleChange}
                inputName="price"
                inputValue={input.price}
                inputType="number"
              />
            </td>
            <td className="list-table-body-row-input">
              <TextInput
                className="list-table-row-input"
                onChange={handleChange}
                inputName="quantity"
                inputValue={input.quantity}
                inputType="number"
              />
            </td>
            <td className="list-table-body-row-button">
              <button className="list-table-button" onClick={handleSubmit}>
                <MdCheckCircleOutline className="list-table-button-icon list-submit-button" />
              </button>
              <button className="list-table-button" onClick={toggleUpdateItem}>
                <MdOutlineCancel className="list-table-button-icon list-cancel-button" />
              </button>
            </td>
          </tr>
        ) : (
          <tr>
            <td onClick={toggleUpdateItem} className="list-table-body-row">
              {item.nome}
            </td>
            <td onClick={toggleUpdateItem} className="list-table-body-row">
              R$ {item.preco}
            </td>
            <td onClick={toggleUpdateItem} className="list-table-body-row">
              {item.quantidade}
            </td>
            <td className="list-table-body-row">
              <div className="list-delete-button">
                <ConfirmDeleteButton
                  className="align-button-list-items"
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </td>
          </tr>
        )}
      </>
    );
  }

  function renderEmptyItem() {
    return (
      <tr className="grocery-empty-warn-container">
        <td className="list-table-body-row-warn">
          <p className="grocery-empty-warn">
            Sua lista está vazia! Adicione alguns itens clicando no botão "+"
            acima!
          </p>
        </td>
        <td className="list-table-body-row-warn"></td>
        <td className="list-table-body-row-warn"></td>
        <td className="list-table-body-row-warn"></td>
      </tr>
    );
  }

  function renderContent() {
    return <>{empty ? renderEmptyItem() : renderItem()}</>;
  }

  return <>{renderContent()}</>;
}
